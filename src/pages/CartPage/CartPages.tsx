import { EmptyCartIcon } from "assets";
import { ArrowBack, Cart } from "components";
import { clearCart, getCart, useAppDispatch, useAppSelector } from "store";
import { IBookDetails } from "types";
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
        <StyledCartPages
          animate={{ x: 0 }}
          initial={{ x: -2500 }}
          transition={{
            duration: 1.5,
          }}
        >
          {cart.map((book: IBookDetails) => (
            <Cart book={book} key={book.isbn13}></Cart>
          ))}
          {cart.length > 0 && (
            <ButtonContainer>
              <Button onClick={handleDeleteAll} whileTap={{ scale: 1.4 }}>
                Clear cart
              </Button>
              <Button onClick={handleDeleteAll} whileTap={{ scale: 1.4 }}>
                Confirm the order
              </Button>
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
