import { CSSProperties } from "react";
import { RingLoader } from "react-spinners";
import { useNewBooks } from "../../hooks";

const override: CSSProperties = {
  display: "block",
  margin: "100px auto 0 auto",
};

export const Loading = () => {
  const { loading } = useNewBooks();

  return (
    <>
      <RingLoader loading={loading} cssOverride={override} size={50} />
    </>
  );
};
