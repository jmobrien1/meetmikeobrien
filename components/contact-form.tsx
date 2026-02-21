'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('/contact-handler.php', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="p-8 rounded-card border border-teal/20 bg-navy-mid text-center">
        <div className="text-3xl mb-4">&#10003;</div>
        <h3 className="font-serif text-xl text-white mb-2">Message Sent</h3>
        <p className="font-sans text-body-sm text-slate">
          Thank you for reaching out. I&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 px-6 py-2 rounded-lg bg-teal/10 border border-teal/20 text-teal font-sans text-body-sm font-medium hover:bg-teal/20 transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-mono text-tag uppercase tracking-[0.12em] text-teal mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg bg-navy-mid border border-teal/[0.08] text-cream font-sans text-body-sm placeholder:text-slate/50 focus:border-teal/40 focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block font-mono text-tag uppercase tracking-[0.12em] text-teal mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-navy-mid border border-teal/[0.08] text-cream font-sans text-body-sm placeholder:text-slate/50 focus:border-teal/40 focus:outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block font-mono text-tag uppercase tracking-[0.12em] text-teal mb-2">
          Subject
        </label>
        <select
          name="subject"
          required
          className="w-full px-4 py-3 rounded-lg bg-navy-mid border border-teal/[0.08] text-cream font-sans text-body-sm focus:border-teal/40 focus:outline-none transition-colors appearance-none"
        >
          <option value="">Select a subject...</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Speaking Request">Speaking Request</option>
          <option value="PropelAI Demo">PropelAI Demo</option>
          <option value="Partnership">Partnership</option>
          <option value="Media">Media</option>
        </select>
      </div>

      <div>
        <label className="block font-mono text-tag uppercase tracking-[0.12em] text-teal mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-navy-mid border border-teal/[0.08] text-cream font-sans text-body-sm placeholder:text-slate/50 focus:border-teal/40 focus:outline-none transition-colors resize-y"
          placeholder="Tell me about your project or inquiry..."
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 font-sans text-body-sm">
          Something went wrong. Please try again or reach out via email.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="px-8 py-3.5 rounded-lg bg-gradient-to-br from-teal to-teal-dim text-navy font-sans font-semibold text-body-sm tracking-[0.01em] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(45,212,168,0.3)] transition-all duration-300 disabled:opacity-50 disabled:transform-none"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
