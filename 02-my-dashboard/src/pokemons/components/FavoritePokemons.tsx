"use client";
import { useAppSelector } from "@/store";

import { PokemonGrid } from "./PokemonGrid";
import { useState, useEffect } from "react";
import { NoFavorites } from "./NoFavorites";

export const FavoritePokemons = () => {
  const favorites = useAppSelector((state) => state.pokemons.favorites);
  const [pokemons, setPokemons] = useState(Object.values(favorites));

  useEffect(() => {
    setPokemons(Object.values(favorites));
  }, [favorites]);

  return (
    <>
      {!pokemons.length ? <NoFavorites /> : <PokemonGrid pokemons={pokemons} />}
    </>
  );
};
