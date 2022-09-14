import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BookDetails,
  SliderCom,
  Subscribe,
  TabBar,
  Title,
} from "../../components";
import {
  fetchDetailsBook,
  getBookDetails,
  useAppDispatch,
  useAppSelector,
} from "../../store";

export const BookDetailsPage = () => {
  const { isbn = "" } = useParams();
  const dispatch = useAppDispatch();
  const { error, isLoading, book } = useAppSelector(getBookDetails);
  const [details, setDetails] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchDetailsBook(isbn));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [isbn, dispatch]);

  const handleDetails = () => {
    setDetails((details) => !details);
  };

  return (
    <>
      <BookDetails
        handleDetails={handleDetails}
        book={book}
        details={details}
        isLoading={isLoading}
        error={error}
      />
      <TabBar book={book} />
      <Subscribe />
      <Title text={"Similar Books"} />
      <SliderCom />
    </>
  );
};
