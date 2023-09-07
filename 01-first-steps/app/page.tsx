import Link from "next/link";

/* todo es server components dentro de app*/
export default function Home() {
  return (
    <main className="flex  flex-col items-center  p-24">
      <span className="text-5xl">Hola mundo</span>
      <Link
        href="/about"
        className="hover:underline hover:text-blue-400 mr-2 transition-all"
      >
        About page
      </Link>
    </main>
  );
}
