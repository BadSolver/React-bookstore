

import { Search } from '../Search/Search'
import { CartLogo, HeartLogo, Logo, Navbar, StyledHeader, UserLogo } from './style'

export const Header = () => {
  return (
    <StyledHeader>
      <Logo></Logo>
      <Search></Search>
      <Navbar>
        <HeartLogo></HeartLogo>
        <CartLogo></CartLogo>
        <UserLogo></UserLogo>
      </Navbar>
    </StyledHeader>
  )
}
