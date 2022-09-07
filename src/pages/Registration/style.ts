import styled from "styled-components";
import { Color, fonts } from "../../ui";

interface Iprops {
  signIn: boolean;
}

export const StyledRegistrtation = styled.div`
  margin: 0 auto;
  max-width: 550px;
  margin-top: 80px;
  border: 1px solid ${Color.Secondary};
  border-radius: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 20px;
  border-bottom: 1px solid ${Color.Secondary};
  background: transparent;
`;

export const Sign = styled.button<Iprops>`
  padding-bottom: 8px;
  border: none;
  background: none;
  ${fonts.H3}
  color: ${Color.Secondary};
  cursor: pointer;
  :hover {
    color: ${Color.Black};
    transition: all .5s;
  }

  ${({ signIn }) => (signIn ? "text-decoration: underline;" : "none")}
  ${({ signIn }) =>
    signIn ? `color:${Color.PrimaryDark} ` : `color:${Color.Secondary}`}
`;

export const Form = styled.div`
  padding-left: 40px;
  background: transparent;
  margin-right: 6px;
`;
