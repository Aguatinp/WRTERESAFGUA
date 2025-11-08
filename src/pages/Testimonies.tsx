import roundSquareLogo from "@/assets/round-square-logo.svg";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const testimonyPlaceholders = [
  {
    title: "Testimony Slot 1",
    location: "Cerro Playa Ancha, Valparaiso",
    prompt: "Summarize how the family hauls water today and what their biggest challenge is while waiting for the filter.",
  },
  {
    title: "Testimony Slot 2",
    location: "Quebrada Verde, Valparaiso",
    prompt: "Describe the journey to fetch safe water and capture a quote about why the bucket delivery matters.",
  },
  {
    title: "Testimony Slot 3",
    location: "Laguna Verde, Valparaiso",
    prompt: "Share the caregiver's perspective on water scarcity and the hope they have for the Water is Life visit.",
  },
];

const Testimonies = () => (
  <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100">
    <header className="border-b border-sky-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <img src={roundSquareLogo} alt="Round Square logo" className="h-12 w-12 rounded-lg border border-sky-100 bg-white p-1" />
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-sky-500">Round Square Service</p>
            <p className="text-lg font-semibold text-slate-800">Water Is Life Testimonies</p>
          </div>
        </div>
        <Link
          to="/"
          className="rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          Back to Project Hub
        </Link>
      </div>
    </header>

    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12">
      <section className="rounded-[32px] border border-sky-100 bg-gradient-to-br from-sky-900 via-sky-800 to-sky-600 p-10 text-white shadow-2xl">
        <div className="mx-auto max-w-4xl text-center space-y-5">
          <h1 className="text-3xl font-bold sm:text-4xl">Stories from the Water Is Life Round Square Journey</h1>
          <p className="text-lg text-white/90">
            Craighouse students from the Water Is Life Round Square community will arrive in Valparaiso with buckets, filters, and a promise to
            listen. Each visit captures a first-person account of living without reliable drinking water so our community can understand the
            urgency behind every donation.
          </p>
          <p className="text-sm text-white/80">
            Use the cards below to upload each neighbor&apos;s portrait, note their neighborhood, and record the quotes you gather on the day
            of delivery.
          </p>
        </div>
      </section>

      <section className="rounded-[32px] border border-sky-100 bg-white p-8 shadow-xl">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/70">Testimony Space</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground">Stories from Valparaiso</h2>
          <p className="mt-4 text-muted-foreground">
            Drop each photo inside the dashed frame, add the person&apos;s name to the title, and paste their testimony so this gallery
            becomes a living record of the visit.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonyPlaceholders.map((slot) => (
            <article
              key={slot.title}
              className="flex flex-col rounded-2xl border border-sky-100 bg-sky-50/50 p-4 shadow-inner shadow-sky-200/60"
            >
              <div className="mb-4 flex aspect-[4/3] w-full items-center justify-center rounded-xl border-2 border-dashed border-sky-300 bg-white text-center text-sm font-semibold text-sky-600">
                Drop {slot.title} photo here
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary/70">{slot.location}</p>
              <h3 className="mt-2 text-lg font-bold text-foreground">{slot.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{slot.prompt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Testimonies;
