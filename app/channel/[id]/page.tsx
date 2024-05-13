import React from "react";

interface ChannelPageProps {
  params: {
    id: string;
  };
}

const channel = (props: ChannelPageProps) => {
  console.log(props);
  return <div>channel{props.params.id}</div>;
};

export default channel;
