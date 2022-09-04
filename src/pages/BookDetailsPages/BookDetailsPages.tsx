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
  useAppDispatch,
  useAppSelector,
} from "../../store/redux-hooks/redux-hooks";
import { getBookDetails } from "../../store/selectors/bookDetailsSelector";
import { fetchDetailsBook } from "../../store/slices/bookDetailsSlice";

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
    <div>
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
    </div>
  );
};
