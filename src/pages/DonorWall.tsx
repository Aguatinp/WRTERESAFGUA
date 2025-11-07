import { Link } from "react-router-dom";

const placeholderDonors = [
  { name: "Coming Soon", note: "Honorable mention pending" },
  { name: "Coming Soon", note: "New family story arriving shortly" },
  { name: "Coming Soon", note: "Update in progress" },
  { name: "Coming Soon", note: "Stay tuned for the latest donation" },
];

const DonorWall = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-sky-500">Honorable Mentions</p>
            <h1 className="mt-2 text-3xl font-bold text-sky-900 md:text-4xl">Family Donor Wall</h1>
            <p className="mt-2 text-sky-800/80">
              Every family listed here donated a filter on their own and keeps a close relationship with the receiving household.
            </p>
          </div>
          <Link
            to="/"
            className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow hover:bg-sky-50"
          >
            ← Back to main page
          </Link>
        </div>

        <section className="rounded-[32px] border border-sky-200/60 bg-white/90 p-6 shadow-2xl backdrop-blur">
          <p className="text-sm text-sky-900/70">
            We are preparing a vibrant, illustrated list to celebrate each donor family. Add your name to the wall by choosing the Family
            Donation option and submitting your dedication message.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {placeholderDonors.map((donor, index) => (
              <div
                key={`${donor.name}-${index}`}
                className="rounded-2xl border border-sky-100 bg-gradient-to-br from-white via-cyan-50/50 to-white p-5 shadow-sm"
              >
                <p className="text-lg font-semibold text-sky-900">{donor.name}</p>
                <p className="text-sm text-sky-800/80">{donor.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DonorWall;
