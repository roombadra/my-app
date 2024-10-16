import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { CustomPaswwordTextField } from "./customComponent/textFieldComponent";

function Register() {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  return (
    <Stack
      sx={{ maxWidth: 500, p: 5, m: "auto" }}
      spacing={2}
      direction="column"
    >
      <TextField
        value={name}
        size="small"
        label="Name"
        type="text"
        fullWidth
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        value={surname}
        size="small"
        label="Surname"
        type="text"
        fullWidth
        onChange={(e) => setSurname(e.target.value)}
      />
      <TextField
        value={email}
        size="small"
        label="Email"
        type="email"
        fullWidth
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomPaswwordTextField
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        passwordError={passwordError}
        label="Password"
      />
      <CustomPaswwordTextField
        password={confirmPassword}
        setPassword={setConfirmPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        passwordError={passwordError}
        label="Confirm Password"
      />
    </Stack>
  );
}

export default Register;
