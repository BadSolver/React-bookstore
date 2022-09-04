import { ArrowBack, Cart } from "../../components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/redux-hooks/redux-hooks";
import { getCart } from "../../store/selectors/cartSelector";
import { clearCart } from "../../store/slices/cartSlice";
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
          {cart.map((book) => (
            <Cart book={book}></Cart>
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
        </StyledCartPages>
      )}
    </>
  );
};
