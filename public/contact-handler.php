<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Honeypot check
if (!empty($_POST['_gotcha'])) {
    http_response_code(200);
    echo json_encode(['ok' => true]);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

$brevoApiKey = getenv('BREVO_API_KEY');

$payload = json_encode([
    'sender' => [
        'name' => 'meetmikeobrien.com Contact Form',
        'email' => 'obrienmike@gmail.com'
    ],
    'to' => [
        ['email' => 'obrienmike@gmail.com', 'name' => 'Mike O\'Brien']
    ],
    'replyTo' => [
        'email' => $email,
        'name' => $name
    ],
    'subject' => "meetmikeobrien.com: $subject",
    'htmlContent' => "<h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Subject:</strong> $subject</p>
        <hr>
        <p>" . nl2br($message) . "</p>"
]);

$ch = curl_init('https://api.brevo.com/v3/smtp/email');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'accept: application/json',
        'api-key: ' . $brevoApiKey,
        'content-type: application/json'
    ],
    CURLOPT_TIMEOUT => 10
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
