import styled from "styled-components";
import { Color, fonts, Space } from "../../ui";

export const StyledBookDetails = styled.div``;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Image = styled.img`
display:flex;
align-items: center;
justify-content: center;`
export const Options = styled.div`
  margin-top: 30px;
`;
export const Authors = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Publisher = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Language = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Year = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;


export const Description = styled.div`
  border-top: 1px solid ${Color.PrimaryDark};
  margin-left: 120px;
  width: 448px;
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
  width: 550px;
  height: 470px;
  border-radius: 10px;
  margin-bottom: ${Space.Small};
  box-shadow: 10px 10px 5px ${Color.Orange};
`;

export const Arrow = styled.div`
  margin: 40px 0 10px 10px;
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
