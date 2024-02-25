import { useEffect, useState } from "react";

import { URLS } from "../../constants/urls";

const useCharacterListViewModel = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const fetchCharacterList = async () => {
    const json = await (await fetch(URLS.API.CHARACTERS)).json();

    setCharacters(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacterList();
  }, []);

  return { loading, characters };
};

export default useCharacterListViewModel;
