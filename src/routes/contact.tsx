import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { z } from "zod";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — BESPOKEFURNITURE9ja" },
      { name: "description", content: "Reach our Yaba, Lagos showroom. Book a private appointment, message us, or chat on WhatsApp." },
      { property: "og:title", content: "Contact & Visit — BespokeFurniture9ja" },
      { property: "og:description", content: "Book a showroom visit or begin a commission with our Lagos studio." },
    ],
  }),
  component: ContactPage,
});

const TIME_SLOTS = [
  "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
];

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  date: z.date({ required_error: "Pick a date" }),
  time: z.string().min(1, "Pick a time"),
  party: z.string().trim().max(10).optional(),
  notes: z.string().trim().max(500).optional(),
});

type Booking = z.infer<typeof bookingSchema>;

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [confirmed, setConfirmed] = useState<Booking | null>(null);
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = bookingSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      date,
      time,
      party: fd.get("party") || undefined,
      notes: fd.get("notes") || undefined,
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setConfirmed(parsed.data);
  };

  return (
    <div className="bg-paper text-forest min-h-screen">
      <SiteNav />

      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-6">Contact & Visit</p>
          <h1 className="font-display text-5xl md:text-8xl leading-[0.9] text-balance max-w-4xl">
            Begin the conversation.
          </h1>
          <p className="mt-8 max-w-xl text-forest/70 leading-relaxed">
            Walk our Yaba showroom by appointment, send a message, or reach us directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Appointment Booking */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-6">01 — Book a Visit</p>
              <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-6 text-balance">
                A private hour at the showroom.
              </h2>
              <p className="text-forest/70 leading-relaxed">
                Reserve a quiet window to walk the floor, feel the materials, and meet a member of our team. Visits run Monday — Saturday, 10:00 to 18:00 (WAT).
              </p>
            </div>

            <div className="lg:col-span-8">
              {confirmed ? (
                <div className="bg-forest text-paper rounded-sm p-10 md:p-14 animate-reveal-up">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-leaf/70 mb-4">Confirmed</p>
                  <h3 className="font-display text-3xl md:text-4xl mb-6 text-balance">
                    Your visit is booked, {confirmed.name.split(" ")[0]}.
                  </h3>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 mb-8 text-sm">
                    <ConfRow label="When" value={`${format(confirmed.date, "EEEE, d MMMM yyyy")} · ${confirmed.time}`} />
                    <ConfRow label="Where" value="Yaba Showroom, Lagos" />
                    <ConfRow label="Guests" value={confirmed.party || "1"} />
                    <ConfRow label="Reference" value={`BF-${Date.now().toString().slice(-6)}`} />
                  </dl>
                  <p className="text-paper/70 leading-relaxed text-sm max-w-md mb-8">
                    A confirmation will arrive at <span className="text-paper">{confirmed.email}</span> shortly. We'll send the showroom pin and a courtesy reminder the day before.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={`https://wa.me/2347083413055?text=${encodeURIComponent(
                        `Hi BespokeFurniture9ja — I just booked a showroom visit for ${format(confirmed.date, "EEE d MMM")} at ${confirmed.time}. (Ref ${confirmed.name})`
                      )}`}
                      target="_blank"
                      rel="noopener"
                      className="bg-paper text-forest px-6 py-3 rounded-full text-[11px] uppercase tracking-widest hover:bg-leaf transition-colors"
                    >
                      Confirm on WhatsApp →
                    </a>
                    <button
                      onClick={() => { setConfirmed(null); setDate(undefined); setTime(""); }}
                      className="border border-paper/30 text-paper px-6 py-3 rounded-full text-[11px] uppercase tracking-widest hover:border-paper transition-colors"
                    >
                      Book another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="bg-moss/5 border border-forest/10 rounded-sm p-8 md:p-12 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Field label="Full name" name="name" required error={errors.name} />
                    <Field label="Email" name="email" type="email" required error={errors.email} />
                    <Field label="Phone / WhatsApp" name="phone" type="tel" required error={errors.phone} />
                    <Field label="Number of guests" name="party" type="number" placeholder="1" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sage block mb-3">
                        Preferred date
                      </span>
                      <Popover>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            className={cn(
                              "w-full flex items-center justify-between bg-transparent border-b border-forest/20 py-3 text-base text-left hover:border-forest transition-colors",
                              !date && "text-forest/40"
                            )}
                          >
                            {date ? format(date, "EEEE, d MMMM yyyy") : "Choose a date"}
                            <CalendarIcon className="h-4 w-4 opacity-60" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-paper border-forest/20" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(d) => {
                              const today = new Date(); today.setHours(0,0,0,0);
                              return d < today || d.getDay() === 0;
                            }}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.date && <p className="mt-2 text-xs text-destructive">{errors.date}</p>}
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sage block mb-3">
                        Time slot (WAT)
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {TIME_SLOTS.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTime(t)}
                            className={cn(
                              "px-3 py-2 rounded-full border text-[11px] tracking-widest transition-colors",
                              time === t
                                ? "bg-forest text-paper border-forest"
                                : "border-forest/15 text-forest/70 hover:border-forest"
                            )}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      {errors.time && <p className="mt-2 text-xs text-destructive">{errors.time}</p>}
                    </div>
                  </div>

                  <Field label="Anything we should know? (optional)" name="notes" textarea error={errors.notes} />

                  <button
                    type="submit"
                    className="bg-forest text-paper px-8 py-4 rounded-full text-[11px] uppercase tracking-widest hover:bg-moss transition-colors"
                  >
                    Reserve my visit →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* General Contact */}
      <section className="px-6 md:px-10 pb-24 md:pb-32 border-t border-forest/10 pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-6">02 — Send a Message</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1] mb-10 text-balance">
              Or simply write to us.
            </h2>
            {sent ? (
              <div className="bg-moss/5 border border-forest/10 rounded-sm p-10 md:p-14">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sage mb-4">Received</p>
                <h3 className="font-display text-3xl md:text-4xl mb-4">Thank you.</h3>
                <p className="text-forest/70 max-w-md">
                  Your message has reached our studio. We'll respond within two business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-8 max-w-xl"
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

          <aside className="lg:col-span-5 space-y-12">
            <Block label="Showroom">
              <p className="text-forest/80 leading-relaxed">
                Yaba, Lagos<br />
                Nigeria
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-forest/50 mt-3">Nationwide delivery</p>
            </Block>

            <Block label="Direct">
              <a href="tel:+2347083413055" className="block text-lg hover:text-sage transition-colors">+234 708 341 3055</a>
              <a href="https://wa.me/2347083413055" className="inline-block mt-2 font-mono text-[10px] uppercase tracking-widest text-sage underline underline-offset-4">
                WhatsApp →
              </a>
            </Block>

            <Block label="Instagram">
              <a href="https://instagram.com/bespokefurniture9ja" target="_blank" rel="noopener" className="hover:text-sage transition-colors">
                @bespokefurniture9ja
              </a>
              <p className="font-mono text-[10px] uppercase tracking-widest text-forest/50 mt-2">89.5K followers</p>
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
  label, name, type = "text", textarea = false, required = false, placeholder, error,
}: { label: string; name: string; type?: string; textarea?: boolean; required?: boolean; placeholder?: string; error?: string }) {
  const cls =
    "w-full bg-transparent border-b border-forest/20 py-3 text-base text-forest placeholder:text-forest/30 focus:outline-none focus:border-forest transition-colors";
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sage block mb-3">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={3} placeholder={placeholder} className={cls} />
      ) : (
        <input type={type} name={name} required={required} placeholder={placeholder} className={cls} />
      )}
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
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

function ConfRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[9px] uppercase tracking-[0.25em] text-leaf/60 mb-1">{label}</dt>
      <dd className="font-display text-lg text-paper">{value}</dd>
    </div>
  );
}
