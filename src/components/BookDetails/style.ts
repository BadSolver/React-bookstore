import styled from "styled-components";
import { StyledButton } from "../../components/Button/style";
import { Color, fonts, Space } from "../../ui";

export const StyledBookDetails = styled.div`
  margin-top: 10px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    align-self: center;
  }
`;
export const Image = styled.img`
  background: transparent;
  width: 350px;
  height: 420px;
`;
export const Options = styled.div`
  flex: 0 1 70%;
  margin-top: 30px;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 800px) {
    :last-child {
      flex-wrap: wrap;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 548px;
  margin-left: 120px;
  border-top: 1px solid ${Color.PrimaryDark};

  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 20px;
    max-width: 310px;
  }
`;

export const Cost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
`;
export const Price = styled.div`
  ${fonts.H2}
`;
export const BackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 470px;
  margin-bottom: ${Space.Small};
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 4px 17px rgba(0, 0, 0, 0.5);

  @media (max-width: 800px) {
    max-width: 310px;
  }
`;

export const LabelText = styled.div`
  flex: 0 1 50%;
  padding-top: 6px;
  ${fonts.Subline}
  color: ${Color.PrimaryDark};
  text-align: right;

  @media (max-width: 800px) {
    font-size: 16px;
  }
  
`;
export const ValueText = styled.p`
  padding-top: 6px;
  ${fonts.Subline}
  color:${Color.Secondary};
`;

export const MoreDetails = styled.button`
  align-self: flex-start;
  margin-top: 10px;
  ${fonts.Subline}
  background: transparent;
  color: ${Color.PrimaryDark};
  padding-left: 0;
  border: none;
  cursor: pointer;
  :hover {
    color: ${Color.Black};
    transition: all 0.5s;
  }
`;

export const Button = styled(StyledButton)`
  margin: 0 auto;
  width: 40%;
  padding: 15px 15px;

  @media (max-width: 800px) {
    padding: 15px 10px;
    margin-top: 20px;
    width: 80%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
