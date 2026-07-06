"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="glass rounded-[8px] p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-medium text-white/72">
          Name
          <input
            required
            name="name"
            className="focus-ring min-h-12 rounded-[8px] border border-white/12 bg-white/[0.06] px-4 text-white outline-none"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/72">
          Email
          <input
            required
            type="email"
            name="email"
            className="focus-ring min-h-12 rounded-[8px] border border-white/12 bg-white/[0.06] px-4 text-white outline-none"
            autoComplete="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-white/72">
          Message
          <textarea
            required
            name="message"
            rows={5}
            className="focus-ring rounded-[8px] border border-white/12 bg-white/[0.06] px-4 py-3 text-white outline-none"
          />
        </label>
        <button
          type="submit"
          className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-opai-blue px-6 text-sm font-semibold text-white shadow-glow transition hover:bg-opai-blue-soft"
        >
          Send message
          <Send className="ml-2 size-4" aria-hidden="true" />
        </button>
        {sent ? (
          <p className="rounded-[8px] border border-ptsd-green/30 bg-ptsd-green/10 px-4 py-3 text-sm text-ptsd-green">
            Thanks. Your message is ready for a production form endpoint.
          </p>
        ) : null}
      </div>
    </form>
  );
}
