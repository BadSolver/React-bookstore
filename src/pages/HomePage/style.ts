import { motion } from "framer-motion";
import styled from "styled-components";
import { Space } from "ui";

export const StyledHome = styled(motion.div)`
  margin-top: ${Space.ExtraLarge};

  @media (max-width: 800px) {
    margin-top: 36px;
  }
`;
