import React from "react";

function Like(props) {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";

  return (
    <i
      style={{ cursor: "pointer" }}
      className={classes}
      onClick={() => props.onClick(props.movie)}
    />
  );
}

export default Like;
