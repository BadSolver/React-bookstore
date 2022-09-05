import { Github } from "../../assets";
import { Container, Description, Git, StyledFooter, Title } from "./style";

export const Footer = () => {
  return (
    <StyledFooter>
      <Description>©2022 Bookstore</Description>
      <Container>
        <Title> Alex Kurov</Title>
        <Git><a href="https://github.com/BadSolver" target='blank'><Github/></a></Git>
      </Container>
      <Description>All rights reserved</Description>
      
    </StyledFooter>
  );
};
