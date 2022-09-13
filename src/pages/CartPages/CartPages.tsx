import { EmptyCartIcon } from "../../assets";
import { ArrowBack, Cart } from "../../components";
import {
  clearCart,
  getCart,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import { IBookDetails } from "../../types";
import { Button, ButtonContainer, StyledCartPages, Title } from "./style";

export const CartPages = () => {
  const { cart } = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  const handleDeleteAll = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <ArrowBack />
      {cart && (
        <StyledCartPages>
          {cart.map((book: IBookDetails) => (
            <Cart book={book} key={book.isbn13}></Cart>
          ))}
          {cart.length > 0 && (
            <ButtonContainer>
              <Button onClick={handleDeleteAll}>Clear cart</Button>
              <Button onClick={handleDeleteAll}>Confirm the order</Button>
            </ButtonContainer>
          )}
        </StyledCartPages>
      )}
      {cart.length === 0 && (
        <StyledCartPages>
          <Title>Your cart is empty</Title>
          <EmptyCartIcon />
        </StyledCartPages>
      )}
    </>
  );
};
