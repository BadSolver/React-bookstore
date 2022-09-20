import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Loader } from "components";
import { getFirebaseMessageError } from "utils";
import { ErrorMessage } from "../SignIn/style";
import { StyledSignUp, Input, Title, Button } from "./style";

type SignUpValues = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

interface Iprops {
  handleModal: () => void;
}

export const SignUp = ({ handleModal }: Iprops) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<SignUpValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const password = useRef({});
  password.current = watch("password", "");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit: SubmitHandler<SignUpValues> = ({ email, password }) => {
    setErrorMsg(null);
    setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        handleModal();
      })
      .catch((error) => {
        setErrorMsg(getFirebaseMessageError(error.code));
      })
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

  return (
    <StyledSignUp onSubmit={handleSubmit(onSubmit)}>
      {errors.name && <ErrorMessage> {errors.name.message}</ErrorMessage>}
      <Title>Email</Title>
      <Input
        type="email"
        placeholder="Enter your email..."
        {...register("email", {
          required: "Email is required",
        })}
      />
      {errors.email && <ErrorMessage> {errors.email.message}</ErrorMessage>}
      {errorMsg && <ErrorMessage> {errorMsg}</ErrorMessage>}
      <Title>Password</Title>

      <Input
        type="password"
        placeholder="Enter your password..."
        {...register("password", {
          required: {
            value: true,
            message: "Enter your password",
          },
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
          maxLength: {
            value: 20,
            message: "Password cannot be more than 20 symbols",
          },
        })}
      />
      <Title>Confirm password</Title>
      <Input
        type="password"
        placeholder="Confirm your password..."
        {...register("passwordConfirm", {
          required: {
            value: true,
            message: "Confirm your password",
          },
          validate: (value: string) =>
            value === password.current || "Your password does not match. Please try again",
        })}
      />
      {errors.passwordConfirm && (
        <ErrorMessage> {errors.passwordConfirm.message}</ErrorMessage>
      )}
      <Button type="submit" whileTap={{ scale: 1.15 }}>
        {isLoading ? <Loader size={"25px"} margin="0px"/> : "Sign up"}
      </Button>
    </StyledSignUp>
  );
};
