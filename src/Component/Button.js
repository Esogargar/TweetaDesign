import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faRetweet,
  faReply,
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";

export const ReplyButton = () => (
  <i className="fa fa-reply reply-button">
    <FontAwesomeIcon icon={faReply} />
  </i>
);

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

export const RetweetButton = props => (
  <span className="retweet-button">
    <i className="fa fa-retweet">
      <FontAwesomeIcon icon={faRetweet} />
    </i>
    {getRetweetCount(props.count)}
  </span>
);

export const LikeButton = props => (
  <span className="like-button">
    <i>
      <FontAwesomeIcon icon={faHeart} />
    </i>
    {props.count > 0 && <span className="like-count">{props.count}</span>}
  </span>
);

export const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button">
    <FontAwesomeIcon icon={faEllipsisH} />
  </i>
);
