import React, { Fragment, useContext, useEffect, Suspense, lazy } from "react";

import { IEpisodeprops } from "../interfaces/interfaces";
import { Store } from "../../Store";
import { fetchDataAction, toggleFavAction } from "../actions/episodeActions";

const EpisodesList = lazy<any>(() => import("../EpisodesList"));

export default function HomePage() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeprops = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <Fragment>
      <Suspense fallback={<div> ...loading </div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </Suspense>
    </Fragment>
  );
}
