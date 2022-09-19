import React, { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";
import { StyledLoader } from "./style";

interface Iprops {
  size: string;
}

export const Loader = ({ size }: Iprops) => {
  const override: CSSProperties = {
    background: "transparent",
  };

  return (
    <StyledLoader>
      <ClipLoader cssOverride={override} size={size} color="goldenrod" />
    </StyledLoader>
  );
};
