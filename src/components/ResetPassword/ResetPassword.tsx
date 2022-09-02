import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { CSSProperties, useState } from "react";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { app } from "../../firebase";
import { getFirebaseMessageError } from "../../utils";
import { ErrorMessage } from "../SignIn/style";
import { Button, Form, Input, Title } from "./style";

interface InputType {
  email: string;
}

const override: CSSProperties = {
  display: "block",
  color: "white",
  margin: "0 auto",
};

export const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>();
  const auth = getAuth(app);
  const onSubmit = ({ email }: InputType) => {
    setIsLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage(
          "You have successfully reset your password, check your email"
        );
      })
      .catch((error) => {
        setMessage(getFirebaseMessageError(error.code));
      })
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Reset your Password</Title>
        <Input
          type="email"
          {...register("email", { required: "Enter your email" })}
          placeholder="Enter your email"
          id="email"
        />
        <Title>{errors.email?.message}</Title>
        {errors.email && <ErrorMessage> {errors.email.message}</ErrorMessage>}
        {message && <ErrorMessage> {message}</ErrorMessage>}
        <Button type="submit">
          {isLoading ? (
            <ClipLoader cssOverride={override} size={30} color={"white"} />
          ) : (
            "Reset Password"
          )}
        </Button>
      </Form>
    </>
  );
};
