import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Content, StyledMainTemplate } from "./style";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </StyledMainTemplate>
  );
};
