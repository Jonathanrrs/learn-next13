/* (general) poner la ruta asi evita que tenga que pasar por ahi
ejemplo
  /general/about | /general/contact
  ->
  /about | /contact
*/

import { Navbar } from "@/components";

/* snippet lrc */
export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola mundo</span>
        {children}
      </main>
    </>
  );
}
