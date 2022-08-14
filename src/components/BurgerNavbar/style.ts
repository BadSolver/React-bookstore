import styled from "styled-components";

export const StyledBurgerNavbar = styled.nav`
    max-width: 1120px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        align-items: flex-end
    }
`