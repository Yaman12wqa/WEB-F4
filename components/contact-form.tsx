"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackPortfolioEvent } from "@/lib/analytics";

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${name.trim()}`);
    const body = encodeURIComponent(message.trim());

    trackPortfolioEvent("contact_mailto", {
      hasName: String(Boolean(name.trim())),
      hasMessage: String(Boolean(message.trim())),
    });

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm font-medium">
        Name
        <input
          className="h-11 rounded-md border bg-background px-3 text-sm outline-none transition-colors focus:border-ring"
          value={name}
          onChange={(event) => setName(event.target.value)}
          minLength={2}
          required
          autoComplete="name"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Message
        <textarea
          className="min-h-32 rounded-md border bg-background px-3 py-3 text-sm leading-6 outline-none transition-colors focus:border-ring"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          minLength={10}
          required
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit">
          <Send aria-hidden="true" />
          Send email
        </Button>
        <Button type="button" variant="outline" asChild>
          <a href={`mailto:${email}`}>
            <Mail aria-hidden="true" />
            Open mail client
          </a>
        </Button>
      </div>
    </form>
  );
}
