import { memo } from "react";

import { Loading } from "../../../components";

import useCharacterDetailViewModel from "../useCharacterDetailViewModel";

import CharacterDetail from "../CharacterDetail/CharacterDetail";

const CharacterDetailSection = () => {
  const { loading, detail } = useCharacterDetailViewModel();

  return (
    <section>
      {loading ? <Loading /> : <CharacterDetail detail={detail} />}
    </section>
  );
};

export default memo(CharacterDetailSection);
