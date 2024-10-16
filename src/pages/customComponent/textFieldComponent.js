import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function CustomInputTextField({ email, setEmail, emailError }) {
  return (
    <TextField
      value={email}
      size="small"
      label="Email"
      type="email"
      fullWidth
      onChange={(e) => setEmail(e.target.value)}
      error={emailError !== null && emailError.length > 0}
      helperText={
        emailError !== null && emailError.length > 0 ? emailError : ""
      }
    />
  );
}

function CustomPaswwordTextField({
  showPassword,
  setShowPassword,
  password,
  setPassword,
  passwordError,
  label,
}) {
  return (
    <TextField
      value={password}
      size="small"
      label={label}
      type={showPassword ? "text" : "password"}
      fullWidth
      onChange={(e) => setPassword(e.target.value)}
      error={passwordError !== null && passwordError.length > 0}
      helperText={
        passwordError !== null && passwordError.length > 0 ? passwordError : ""
      }
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              position="end"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export { CustomInputTextField, CustomPaswwordTextField };
