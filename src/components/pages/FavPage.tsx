import React, { Suspense, lazy, useContext } from "react";

import { Store } from "../../Store";
import { toggleFavAction } from "../actions/episodeActions";
import { IEpisodeprops } from "../interfaces/interfaces";

const EpisodesList = lazy<any>(() => import("../EpisodesList"));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeprops = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };
  return (
    <Suspense fallback={<div> ...loading </div>}>
      <div className="episode-layout">
        <EpisodesList {...props} />
      </div>
    </Suspense>
  );
}
