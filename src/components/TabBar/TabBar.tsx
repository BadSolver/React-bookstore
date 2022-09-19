import React, { useState } from "react";
import { IBookDetails } from "types";
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
  const [description, setDescription] = useState<boolean>(true);
  const [authors, setAuthors] = useState<boolean>(false);
  const [reviews, setReviews] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(true);

  const handleDescription = () => {
    setDescription((description) => !description);
    setAuthors(false);
    setReviews(false);
  };

  const handleAuthors = () => {
    setAuthors((authors) => !authors);
    setDescription(false);
    setReviews(false);
    setIsActive(false);
  };

  const handleReviews = () => {
    setReviews((reviews) => !reviews);
    setAuthors(false);
    setDescription(false);
    setIsActive(false);
  };

  return (
    <StyledTabBar>
      <Container>
        <TabItem onClick={handleDescription} isActive={isActive}>
          Description
        </TabItem>
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
          <TabDescription>
            <a href={book?.url} target="blank">
              Ebook
            </a>
          </TabDescription>
        </ContainerDescription>
      )}
    </StyledTabBar>
  );
};
