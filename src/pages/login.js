import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import {
  CustomInputTextField,
  CustomPaswwordTextField,
} from "./customComponent/textFieldComponent";
import LoginToApi from "./api/Auth/LoginToApi";

function Login() {
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  async function handleLogin() {
    try {
      setEmailError("");
      setPasswordError("");
      setLoading(true);
      const api = await LoginToApi(email, password);
      setLoading(false);

      // if (!api.success && api.errors) {
      //   if (api.status ===  400) {
      //     if (api.errors.email) {
      //       console.log(api.errors.email[0]);
      //     }
      //     if (api.errors.password) {
      //       setPasswordError(api.errors.password[0]);
      //     }
      //   }
      // }
      console.log(api);
      if (api.status === 400) {
        setEmailError(api.errors.email ? api.errors.email[0] : "");
        setPasswordError(api.errors.password ? api.errors.password[0] : "");
      }
      if (api.http_code === 200) {
        console.log("Success");
        // enregistre le token dans le local storage
        // redirige vers la page d'accueil
      }
      console.log(api);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Stack
        sx={{ maxWidth: 500, p: 5, m: "auto" }}
        spacing={2}
        direction="column"
      >
        <CustomInputTextField
          email={email}
          setEmail={setEmail}
          emailError={emailError}
        />
        <CustomPaswwordTextField
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          passwordError={passwordError}
          label="Password"
        />

        <Button
          disabled={loading}
          variant="outlined"
          size="medium"
          onClick={handleLogin}
          endIcon={loading ? <CircularProgress size={25} /> : <></>}
        >
          Login
        </Button>
      </Stack>
    </>
  );
}

export default Login;
