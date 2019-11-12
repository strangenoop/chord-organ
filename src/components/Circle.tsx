import React from "react";

type Props = {
  radius: number;
};

const Circle = ({ radius }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        border: "1px solid white",
        borderRadius: "50%",
        width: radius * 2,
        height: radius * 2
      }}
    ></div>
  );
};

export default Circle;
