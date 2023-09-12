import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";
/* snippet rxs slice */

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

/* const getInitialState = (): PokemonsState => {
  // if (typeof localStorage === "undefined") return {};
  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") ?? "{}"
  );
  return favorites;
}; */

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
  /*   "1": { id: "1", name: "bulbasaur" },
  "3": { id: "3", name: "venosaur" },
  "4": { id: "4", name: "Charmander" }, */
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemon(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      /* != undefined */
      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      // TODO: no se debe hacer en redux
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toggleFavorite, setFavoritePokemon } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
