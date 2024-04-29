import React from "react";

const channel = (props: any) => {
  console.log(props);
  return <div>channel{props.params.id}</div>;
};

export default channel;
