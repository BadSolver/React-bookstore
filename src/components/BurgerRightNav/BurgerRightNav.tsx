
import { useState } from "react";
import { Background, Button, Form, Hr, Search, StyledList, Title } from "./style";

interface IProps {
    open?: boolean;
}

export const RightNav = ({open} : IProps) => {

  const [auth, setAuth] = useState(true)

  if (auth) {
    return <>
      <Background open={open}/>
      <StyledList open={open}>
        <Hr />
        <Form>
          <Search placeholder='Search' open={open}/>
          <Title> FAVORITES</Title>
          <Title> Cart</Title>
        </Form>
        <Button>Log out</Button>
     </StyledList>
    </>
  } else {
    return (
      <>
      <Background open={open}/>
      <StyledList open={open}>
        <Hr />
        <Form>
          <Search placeholder='Search' open={open}/>
        </Form>
        <Button>Sign In</Button>
      </StyledList>
      </>
      
    );
  }

 
};
