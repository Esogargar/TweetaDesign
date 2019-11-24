import React from "react";
import ReactDOM from "react-dom";

import { testTweet } from "./Component/tweetData";

import Tweet from "./Component/Tweet";

// render //
ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
