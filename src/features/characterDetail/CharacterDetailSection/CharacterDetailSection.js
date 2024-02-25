import { memo, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Loading } from "../../../components";
import { URLS } from "../../../constants/urls";

import CharacterDetail from "../CharacterDetail/CharacterDetail";

const CharacterDetailSection = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});

  const fetchCharacterDetail = async () => {
    const json = await (
      await fetch(`${URLS.API.CHARACTER_DETAIL}/${id}`)
    ).json();

    setDetail(json.data.results[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacterDetail();
  });

  return (
    <section>
      {loading ? <Loading /> : <CharacterDetail detail={detail} />}
    </section>
  );
};

export default memo(CharacterDetailSection);
