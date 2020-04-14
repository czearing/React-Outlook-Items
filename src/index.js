import React from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import { initializeIcons, Check } from "office-ui-fabric-react";
import "./styles.css";

initializeIcons();

const messages = [
  {
    user: "George",
    title: "Hi!",
    content: "How Are You Doing!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "BillyBillyBillyBilly",
    title: "Where Are You?",
    content: "Where did you go?",
    time: "Sun 12/7",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content: "Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content: "Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content: "Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content: "Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content: "Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content: "Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content: "Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },

  {
    user: "Sally",
    title: "Look at my cat!",
    content: "Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content: "Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content: "Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content: "Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content: "Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content:
      "Look at this picture of my cat! Look at this picture of my cat! Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content:
      "Look at this picture of my cat! Look at this picture of my cat! Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content:
      "Look at this picture of my cat! Look at this picture of my cat! Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content:
      "Look at this picture of my cat! Look at this picture of my cat! Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content:
      "Look at this picture of my cat! Look at this picture of my cat! Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content:
      "Look at this picture of my cat! Look at this picture of my cat! Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content:
      "Look at this picture of my cat! Look at this picture of my cat! Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content:
      "Look at this picture of my cat! Look at this picture of my cat! Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: false
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content:
      "Look at this picture of my cat! Look at this picture of my cat! Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content:
      "Look at this picture of my cat! Look at this picture of my cat! Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content:
      "Look at this picture of my cat! Look at this picture of my cat! Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content:
      "Look at this picture of my cat! Look at this picture of my cat! Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  },
  {
    user: "Sally",
    title: "Look at my cat!",
    content:
      "Look at this picture of my cat! Look at this picture of my cat! Look at this picture of my cat!",
    time: "Sun 12/8",
    unread: true
  }
];

function App() {
  return (
    <div className="App">
      {messages.map(entities => (
        <div className={cx("item", entities.unread && "unread")}>
          <Check />
          <div className="user">{entities.user}</div>
          <div className="desc">
            <span className="title">{entities.title}</span>
            <span className="message">{entities.content}</span>
          </div>
          <div className="time">{entities.time}</div>
        </div>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
