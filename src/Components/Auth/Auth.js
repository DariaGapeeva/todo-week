import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Input from "./../common/Input";
import { useForm } from "react-hook-form";
import { authApi } from "../../API/api";

const Container = styled.div`
  width: 500px;
  margin: 100px auto;
  background-color: mistyrose;
  border-radius: 7px;
  text-align: left;
  padding: 20px 50px 50px 50px;
  border: 1px solid thistle;
  box-shadow: 5px 10px 6px -6px rgb(123, 104, 238, 0.7); ;
`;

const ButtonContainer = styled.div`
  display: inline-block;
  margin-right: 15px;
`;
const ErrorMessage = styled.p`
  color: crimson;
  font-size: 0.8rem;
  font-weight: 900;
  margin-top: 0;
`;

const Auth = (props) => {
  const {
    register,
    errors,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  const handleFormSubmit = (data) => {
    if (data.action === "signUp") {
      authApi.signUp(data.Email, data.Password);
      console.log("Регистрация", data);
    }
    if (data.action === "signIn") {
      console.log("Авторизация");
      authApi
        .signIn(data.Email, data.Password)
        .then((response) => console.log(response));
    }
  };

  const onSignIn = handleSubmit((data) => {
    data.action = "signIn";

    handleFormSubmit(data);
  });

  const onSignUp = handleSubmit((data) => {
    data.action = "signUp";
    handleFormSubmit(data);
  });

  console.log(errors);
  return (
    <Container>
      <h1>Авторизация</h1>
      <form>
        <Input
          label="Email"
          name="Email"
          register={register({
            required: "Email is required",
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.Email && <ErrorMessage>{errors.Email.message}</ErrorMessage>}
        <Input
          label="Password"
          name="Password"
          register={register({
            required: "Password is required",
            minLength: {
              value: 6,
              message: "MinLength is 6",
            },
          })}
        />
        {errors.Password && (
          <ErrorMessage>{errors.Password.message}</ErrorMessage>
        )}
        <ButtonContainer>
          <Button color="#483D8B" onClick={onSignIn}>
            Войти
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button color="#483D8B" onClick={onSignUp}>
            Зарегистрироваться
          </Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default Auth;
