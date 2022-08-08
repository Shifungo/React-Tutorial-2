import classes from "./MeetupItem.module.css";
import React from "react";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoristesContext from "../../store/favorites-context";
function MeetupItem(props) {
  function toggleFavoriteStatusHandler() {
    const favoriteCtx = useContext(FavoristesContext);
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}> To Favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
