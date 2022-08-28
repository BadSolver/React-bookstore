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
export const Image = styled.img``;
export const Options = styled.div`
  flex: 0 1 70%;
  margin-top: 30px;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  background-color: ${Color.Blue};
  border-radius: 10px;
  box-shadow: 10px 10px 5px ${Color.Orange};
`;

export const Arrow = styled.div`
  margin: 30px 0 10px 10px;
  cursor: pointer;
`;
export const LabelText = styled.p`
  flex: 0 1 70%;
  padding-top: 6px;
  ${fonts.Subline}
  color: ${Color.PrimaryDark};
  text-align: right;
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
`;

export const Button = styled(StyledButton)`
  display: block;
  margin: 0 auto;
`;
