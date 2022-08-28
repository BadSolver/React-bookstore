import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "../SignIn/style";
import { StyledSignUp, Input, Title, Button } from "./style";

type SignUpValues = {
  name: string;
  email: string;
  password: string;
};

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<SignUpValues> = ({ email, password, name }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
      });
  };

  return (
    <StyledSignUp onSubmit={handleSubmit(onSubmit)}>
      <Title>Name</Title>
      <Input
        type="name"
        placeholder="name"
        {...register("name", {
          required: "Name is required",
        })}
      />
      {errors.name && <ErrorMessage> {errors.name.message}</ErrorMessage>}
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

      <Title>Confirm password</Title>

      <Input
        type="password"
        placeholder="Confirm password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
      />
      {errors.password && (
        <ErrorMessage> {errors.password.message}</ErrorMessage>
      )}

      <Button type="submit">Sign up</Button>
    </StyledSignUp>
  );
};
