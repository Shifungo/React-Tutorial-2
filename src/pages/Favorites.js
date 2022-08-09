import React from "react";
import { useContext } from "react";
import FavoristesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoriteCtx = useContext(FavoristesContext);
  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Statar adding some</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
