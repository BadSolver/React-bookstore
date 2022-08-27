import React, { useState } from "react";
import { IBookDetails } from "../../types";
import {
  Container,
  ContainerDescription,
  StyledTabBar,
  TabDescription,
  TabItem,
} from "./style";

interface IProps {
  book: IBookDetails | undefined;
}

export const TabBar = ({ book }: IProps) => {
  const [description, setDescription] = useState<boolean>(false);
  const [authors, setAuthors] = useState<boolean>(false);
  const [reviews, setReviews] = useState<boolean>(false);

  const handleDescription = () => {
    setDescription(!description);
    setAuthors(false);
    setReviews(false);
  };

  const handleAuthors = () => {
    setAuthors(!authors);
    setDescription(false);
    setReviews(false);
  };

  const handleReviews = () => {
    setReviews(!reviews);
    setAuthors(false);
    setDescription(false);
  };

  return (
    <StyledTabBar>
      <Container>
        <TabItem onClick={handleDescription}>Description</TabItem>
        <TabItem onClick={handleAuthors}>Authors</TabItem>
        <TabItem onClick={handleReviews}>Reviews</TabItem>
      </Container>

      {description && (
        <ContainerDescription>
          <TabDescription>{book?.desc}</TabDescription>
        </ContainerDescription>
      )}
      {authors && (
        <ContainerDescription>
          <TabDescription>{book?.authors}</TabDescription>
        </ContainerDescription>
      )}
      {reviews && (
        <ContainerDescription>
          <TabDescription>{book?.url}</TabDescription>
        </ContainerDescription>
      )}
    </StyledTabBar>
  );
};
