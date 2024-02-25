import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { URLS } from "../../constants/urls";

const useCharacterDetailViewModel = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      const json = await (
        await fetch(`${URLS.API.CHARACTER_DETAIL}/${id}`)
      ).json();

      setDetail(json.data.results[0]);
      setLoading(false);
    };

    fetchCharacterDetail();
  }, [id]);

  return { loading, detail };
};

export default useCharacterDetailViewModel;
