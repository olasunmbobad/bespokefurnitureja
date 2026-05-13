import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BESPOKEFURNITURE9ja" },
      { name: "description", content: "Reach our Lagos studio. Email, WhatsApp, and visits by appointment." },
      { property: "og:title", content: "Contact — BespokeFurniture9ja" },
      { property: "og:description", content: "Get in touch with our Lagos studio to begin a commission." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-paper text-forest min-h-screen">
      <SiteNav />

      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-6">Contact</p>
          <h1 className="font-display text-5xl md:text-8xl leading-[0.9] text-balance max-w-4xl">
            Begin the conversation.
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7">
            {sent ? (
              <div className="bg-moss/5 border border-forest/10 rounded-sm p-10 md:p-14">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-4">Received</p>
                <h2 className="font-display text-3xl md:text-4xl mb-4">Thank you.</h2>
                <p className="text-forest/70 max-w-md">
                  Your message has reached our studio. We'll respond within two business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-8"
              >
                <Field label="Your name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone (optional)" name="phone" type="tel" />
                <Field label="What are you envisioning?" name="message" textarea required />
                <button
                  type="submit"
                  className="bg-forest text-paper px-8 py-4 rounded-full text-[11px] uppercase tracking-widest hover:bg-moss transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <aside className="lg:col-span-5 space-y-12">
            <Block label="Studio">
              <p className="text-forest/80 leading-relaxed">
                12 Admiralty Way<br />
                Lekki Phase 1, Lagos<br />
                Nigeria
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-forest/50 mt-3">By appointment</p>
            </Block>

            <Block label="Direct">
              <a href="tel:+2348091234567" className="block text-lg hover:text-sage transition-colors">+234 809 123 4567</a>
              <a href="https://wa.me/2348091234567" className="inline-block mt-2 font-mono text-[10px] uppercase tracking-widest text-sage underline underline-offset-4">
                WhatsApp →
              </a>
            </Block>

            <Block label="Email">
              <a href="mailto:studio@bespoke9ja.com" className="hover:text-sage transition-colors">
                studio@bespoke9ja.com
              </a>
            </Block>

            <Block label="Hours">
              <p className="text-forest/80 leading-relaxed">
                Monday — Friday · 10:00 — 18:00<br />
                Saturday · By appointment
              </p>
            </Block>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label, name, type = "text", textarea = false, required = false,
}: { label: string; name: string; type?: string; textarea?: boolean; required?: boolean }) {
  const cls =
    "w-full bg-transparent border-b border-forest/20 py-3 text-base text-forest placeholder:text-forest/30 focus:outline-none focus:border-forest transition-colors";
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sage block mb-3">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={cls} />
      ) : (
        <input type={type} name={name} required={required} className={cls} />
      )}
    </label>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-4">{label}</p>
      <div className="text-forest">{children}</div>
    </div>
  );
}
