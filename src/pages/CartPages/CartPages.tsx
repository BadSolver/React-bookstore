import { useEffect, useRef } from "react";
import { EmptyCart } from "../../assets";
import { ArrowBack, Cart } from "../../components";
import { getCart, useAppDispatch, useAppSelector } from "../../store";
import { clearCart } from "../../store/slices/cartSlice";
import { Button, ButtonContainer, StyledCartPages, Title } from "./style";

export const CartPages = () => {
  const { cart } = useAppSelector(getCart);
  const dispatch = useAppDispatch();
  const isMounted = useRef(false);

  const handleDeleteAll = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    isMounted.current = true;
  }, [cart]);

  return (
    <>
      <ArrowBack />
      {cart && (
        <StyledCartPages>
          {cart.map((book) => (
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
          <EmptyCart />
        </StyledCartPages>
      )}
    </>
  );
};
