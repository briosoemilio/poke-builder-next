// app/pokemon/page.js

import PokemonList from "./_components/PokemonList";

const PokemonPage = () => {
  return (
    <div className="p-5 lg:px-20">
      <div className="mb-10">
        <h1 className="text-center">Pokémon List</h1>
      </div>
      <PokemonList />
    </div>
  );
};

export default PokemonPage;
