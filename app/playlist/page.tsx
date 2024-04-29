import React from "react";

const playlist = (props: any) => {
  console.log(props);
  return <div>playlist {props.searchParams.list}</div>;
};

export default playlist;
