import React from "react";

type Props = {
  radius: number;
  style: {};
};

const Circle = ({ radius, style }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        border: "1px solid white",
        borderRadius: "50%",
        width: radius * 2,
        height: radius * 2,
        ...style
      }}
    ></div>
  );
};

export default Circle;
