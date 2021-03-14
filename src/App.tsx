import React, { Fragment, useContext } from "react";
import { Link } from "@reach/router";

import { Store } from "./Store";

function App(props: any): JSX.Element {
  const { state } = useContext(Store);
  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <h3>pick your favourite episode</h3>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/favourites">Favourite(s) : {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </Fragment>
  );
}

export default App;
