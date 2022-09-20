import React, { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";
import { StyledLoader } from "./style";

interface Iprops {
  size: string;
  margin: string | number;
}

export const Loader = ({ size, margin }: Iprops) => {
  const override: CSSProperties = {
    background: "transparent",
    marginTop: margin,
  };

  return (
    <StyledLoader>
      <ClipLoader cssOverride={override} size={size} color="goldenrod" />
    </StyledLoader>
  );
};
