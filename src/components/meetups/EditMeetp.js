import React, { useRef, navigate } from "react";
import Card from "../ui/Card";
import classes from "./EditMeetp.module.css";

function EditMeeup(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const adressInputRef = useRef();
  const descripitionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const id = props.id;
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAdress = adressInputRef.current.value;
    const enteredDescripiton = descripitionInputRef.current.value;

    const meetupData = {
      id: props.id,
      title: enteredTitle,
      image: enteredImage,
      address: enteredAdress,
      description: enteredDescripiton,
    };

    function editMeetupData() {
      fetch(
        `https://react-tutorial-d7e2b-default-rtdb.firebaseio.com/meetups/${id}.json`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: enteredTitle,
            image: enteredImage,
            address: enteredAdress,
            description: enteredDescripiton,
          }),
        }
      );
    }

    editMeetupData(meetupData);
  }

  return (
    <div className={classes.form}>
      <Card>
        <form action="" onSubmit={submitHandler}>
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
            <button>Save Meetup</button>
          </div>
        </form>
      </Card>
    </div>
  );
}
export default EditMeeup;
