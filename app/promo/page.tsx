export default function PromoPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center px-4">
      <section className="w-full max-w-xl rounded-3xl border border-gray-300 bg-white p-6 text-center shadow-lg">
        <p className="mb-5 text-lg font-semibold">Continue para o Google</p>
        <a
          href="https://www.google.com/"
          className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Acessar Google
        </a>
      </section>
    </main>
  );
}
