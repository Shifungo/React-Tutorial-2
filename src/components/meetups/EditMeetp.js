import React, { useRef } from "react";
import Card from "../ui/Card";
import classes from "./EditMeetp.module.css";

function EditMeeup(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const adressInputRef = useRef();
  const descripitionInputRef = useRef();

  const id = props.id;

  function deleteItem() {
    fetch(
      `https://react-tutorial-d7e2b-default-rtdb.firebaseio.com/meetups/${id}.json`,
      { method: "DELETE" }
    );
  }

  function submitHandler(event) {
    event.preventDefault();

    fetch(
      `https://react-tutorial-d7e2b-default-rtdb.firebaseio.com/meetups/${id}.json`,
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: titleInputRef.current.value,
          image: imageInputRef.current.value,
          address: adressInputRef.current.value,
          description: descripitionInputRef.current.value,
        }),
      }
    ).then(() => {
      window.location.reload(false);
    });
  }

  return (
    <div className={classes.form}>
      <Card>
        <form action="">
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input
              type="text"
              required
              id="title"
              defaultValue={props.title}
              ref={titleInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input
              type="url"
              required
              id="image"
              defaultValue={props.image}
              ref={imageInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Adress</label>
            <input
              type="text"
              required
              id="adress"
              defaultValue={props.address}
              ref={adressInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">description</label>
            <textarea
              name=""
              id="descrition"
              required
              cols="30"
              rows="5"
              defaultValue={props.description}
              ref={descripitionInputRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={submitHandler} type="submit" name="update_button">
              Save Meetup
            </button>
            <button type="submit" onClick={deleteItem} name="delete_button">
              DELETE
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
export default EditMeeup;
