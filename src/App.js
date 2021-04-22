import "instantsearch.css/themes/algolia-min.css";
import React, { Component } from "react";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Stats,
  Highlight
} from "react-instantsearch-dom";
import "./App.css";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const searchClient = instantMeiliSearch(
  "https://demos.meilisearch.com",
  "dc3fedaf922de8937fdea01f0a7d59557f1fd31832cb8440ce94231cfdde7f25"
);

class App extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>Movies Demo with MeiliSearch</h1>
        <InstantSearch indexName="movies" searchClient={searchClient}>
          <Stats />
          <SearchBox />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <div key={props.hit.id}>
      <img
        src={props.hit.poster}
        align="left"
        alt={props.hit.title}
        width="200px"
      />
      <div className="hit-name">
        <Highlight attribute="title" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="overview" hit={props.hit} />
      </div>
    </div>
  );
}

export default App;
