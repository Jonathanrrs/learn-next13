import { FavoritePokemons } from "@/pokemons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Listado de 151 Pokemones",
};

/*  snippet prc */
export default async function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons favoritos <small className="text-blue-500">global state</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}


