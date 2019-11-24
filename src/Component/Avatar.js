import React from "react";
// components //
export function Avatar(hash) {
  var url = ` https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}
