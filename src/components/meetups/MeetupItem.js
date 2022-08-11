import classes from "./MeetupItem.module.css";
import React from "react";
import Card from "../ui/Card";
import { useContext, useState, navigate } from "react";
import FavoristesContext from "../../store/favorites-context";
import EditMeeup from "./EditMeetp";

function MeetupItem(props) {
  const [editingMode, setEditingMode] = useState(true);

  const favoriteCtx = useContext(FavoristesContext);

  function toggleEditingMode() {
    if (editingMode) {
      setEditingMode(false);
    } else {
      setEditingMode(true);
    }
  }

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  let teste;

  if (editingMode === false) {
    teste = (
      <EditMeeup
        id={props.id}
        title={props.title}
        image={props.image}
        address={props.address}
        description={props.description}
      />
    );
  } else {
    teste = null;
  }

  return (
    <div className={classes.itemWrapper}>
      <div>
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
              <button onClick={toggleFavoriteStatusHandler}>
                {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
              </button>
            </div>
            <div className={classes.edtBtnDiv}>
              <button className={classes.edtBtn} onClick={toggleEditingMode}>
                Edit
              </button>
            </div>
          </Card>
        </li>
      </div>
      {teste}
    </div>
  );
}

export default MeetupItem;
