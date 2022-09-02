import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { CSSProperties, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useAppDispatch } from "../../hooks";
import { ROUTE } from "../../router";
import { setUser } from "../../store";
import { getFirebaseMessageError } from "../../utils";
import {
  Button,
  ErrorMessage,
  ForgotPassword,
  Input,
  StyledSignIn,
  Title,
} from "./style";

type SignInValues = {
  name: string;
  email: string;
  password: string;
};
const override: CSSProperties = {
  display: "block",
  color: "white",
  margin: "0 auto",
};

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleNavigate = () => {
    navigate(ROUTE.RESET_PASSWORD);
  };

  const onSubmit: SubmitHandler<SignInValues> = ({ email, password, name }) => {
    setErrorMsg(null);
    setIsLoading(true);
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            userDate: user.metadata.creationTime,
          })
        );
        navigate(ROUTE.ACCOUNT);
      })

      .catch((error) => {
        setErrorMsg(getFirebaseMessageError(error.code));
        console.log(error.code);
      })
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

  return (
    <StyledSignIn onSubmit={handleSubmit(onSubmit)}>
      <Title>Email</Title>
      <Input
        type="email"
        placeholder="You email"
        {...register("email", {
          required: "Email is required",
        })}
      />
      {errors.email && <ErrorMessage> {errors.email.message}</ErrorMessage>}
      <Title>Password</Title>
      <Input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
      />

      <ForgotPassword onClick={handleNavigate}>Forgot password?</ForgotPassword>

      {errorMsg && <ErrorMessage> {errorMsg}</ErrorMessage>}
      {errors.password && (
        <ErrorMessage> {errors.password.message}</ErrorMessage>
      )}
      <Button type="submit">
        {isLoading ? (
          <ClipLoader cssOverride={override} size={30} color={"white"} />
        ) : (
          "Sign In"
        )}
      </Button>
    </StyledSignIn>
  );
};
