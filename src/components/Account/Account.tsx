import { useAuth } from "../../hooks";
import { LogOut } from "../LogOut";
import {
  BoldSubtitle,
  Container,
  Description,
  StyledAccount,
  SubTitle,
  Title,
} from "./style";

export const Account = () => {
  const { userDate, id, email } = useAuth();

  return (
    <StyledAccount>
      <Container>
        <Title>Welcome to the account pages</Title>
        <Description>
          <SubTitle>
            Your email upon registration:
            <BoldSubtitle>{email}</BoldSubtitle>
          </SubTitle>
          <SubTitle>
            Unique number assigned to you:
            <BoldSubtitle>{id}</BoldSubtitle>
          </SubTitle>
          <SubTitle>
            Date of your registration: <BoldSubtitle>{userDate}</BoldSubtitle>
          </SubTitle>
        </Description>
        <LogOut />
      </Container>
    </StyledAccount>
  );
};
