import { createContext, useContext, useEffect, useState } from "react";
import { URLS } from "../constants/urls";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacterList = async () => {
    const response = await fetch(URLS.API.CHARACTERS);
    const json = await response.json();

    setCharacters(json.data.results);
    setFilteredCharacters(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacterList();
  }, []);

  const filterCharacters = (searchTerm) => {
    if (!searchTerm) {
      setFilteredCharacters(characters);
    } else {
      const filtered = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCharacters(filtered);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        characters: filteredCharacters,
        loading,
        filterCharacters,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
