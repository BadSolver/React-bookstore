import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchLogoIcon } from "assets";
import { useInput } from "hooks";
import { useDebounce } from "hooks/useDebounce";
import { useForm } from "react-hook-form";
import { ROUTE } from "router/routes";
import { useAppDispatch } from "store";
import { removeSearchValue, setSearchValue } from "store/slices/searchSlice";
import { trimSearchValue } from "utils";
import { StyledSearch, Input, Button } from "./style";

export const Search = () => {
  const searchValue = useInput();
  const debouncedValue = useDebounce(trimSearchValue(searchValue.value), 1000);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { reset } = useForm();

  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate(ROUTE.SEARCH);
    reset();
  };

  useEffect(() => {
    if (debouncedValue) {
      dispatch(
        setSearchValue({
          searchValue: debouncedValue,
          page: 1,
        })
      );
    } else {
      dispatch(removeSearchValue());
    }
  }, [debouncedValue, dispatch]);

  return (
    <StyledSearch onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Search..."
        name="search"
        {...searchValue}
      />
      <Button type="submit">
        <SearchLogoIcon />
      </Button>
    </StyledSearch>
  );
};
