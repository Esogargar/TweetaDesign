import React from "react";

import "../index.css";
import { Avatar } from "./Avatar";
import { NameWithHandle } from "./NameWithHandle";
import { Message } from "./Message";
import { Time } from "./Time";
import {
  ReplyButton,
  RetweetButton,
  LikeButton,
  MoreOptionsButton
} from "./Button";

// main component //
function Tweet(props) {
  const { gravatar, author, timestamp, message, retweets, likes } = props.tweet;
  return (
    <div className="tweet">
      <Avatar hash={gravatar} />
      <div className="content">
        <NameWithHandle author={author} />
        <Time time={timestamp} />
        <Message message={message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={retweets} />
          <LikeButton count={likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
