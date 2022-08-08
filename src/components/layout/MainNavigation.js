import { Link } from "react-router-dom";
import React from "react";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>react meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-meetups">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
