import React from "react";

export function NameWithHandle(props) {
  const { name, handle } = props.author;
  return (
    <span className="name-with-handle">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}
