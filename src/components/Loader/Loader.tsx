import React, { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";
import { Color } from "ui";

interface Iprops {
  size: string;
}

export const Loader = ({ size }: Iprops) => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };

  return <ClipLoader cssOverride={override} size={size} color={Color.Black} />;
};
