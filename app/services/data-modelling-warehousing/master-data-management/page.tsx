export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-2xl">
        <span className="inline-block rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600">
          Under Development
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-neutral-900">
          This Page Is Coming Soon
        </h1>

        <p className="mt-4 text-lg text-neutral-600">
          We're currently building this page and preparing valuable content.
          Please check back soon for updates.
        </p>

        <div className="mt-10 border-t border-neutral-200 pt-6">
          <p className="text-sm text-neutral-500">
            Developed by{" "}
            <span className="font-semibold text-neutral-900">
              DevFantom Solutions
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}