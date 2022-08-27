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
`;
export const Options = styled.div`
  flex: 0 1 70%;
  margin-top: 30px;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${Color.PrimaryDark};
  margin-left: 120px;
  width: 100%;
  max-width: 548px;

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
  background-color: ${Color.Blue};
  width: 450px;
  height: 470px;
  border-radius: 10px;
  margin-bottom: ${Space.Small};
  box-shadow: 10px 10px 5px ${Color.Orange};
`;

export const Arrow = styled.div`
  margin: 30px 0 10px 10px;
  cursor: pointer;
`;
export const LabelText = styled.p`
  ${fonts.Subline}
  color: ${Color.PrimaryDark};
  padding-top: 6px;
  flex: 0 1 70%;
  text-align: right;
`;
export const ValueText = styled.p`
  ${fonts.Subline}
  color:${Color.Secondary};
  padding-top: 6px;
`;

export const MoreDetails = styled.button`
  align-self: flex-start;
  border: none;
  background: transparent;
  cursor: pointer;
  ${fonts.Subline}
  color: ${Color.PrimaryDark};
  padding-left: 0;
  margin-top: 10px;
`;

export const Button = styled(StyledButton)`
  display: block;
  margin: 0 auto;
`;
