
import { BooksList } from "../../components/BooksList"
import { Title } from "../../components/Title/Title"
import { StyledHome } from "./style"

export const Home = () => {
  return (
    <StyledHome>
      <Title text='New Releases Books'></Title>
      <BooksList></BooksList>
    </StyledHome>
  )
}
