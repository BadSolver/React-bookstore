import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledBooksList = styled(motion.ul)`
  display: grid;
  grid-template-columns: auto auto auto auto;
  border-radius: 10px;
  z-index: 999;
  
  @media (max-width: 1220px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 970px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 650px) {
    grid-template-columns: auto;
    gap: 10px;
  }
`;
