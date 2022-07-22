import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import "./NewUser.css";
import Input from "@mui/material/Input";
import { useDispatch } from "react-redux";
import { userApi } from "../reducers/userReducer/userApi";
import { useForm, Controller } from "react-hook-form";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { ActionAlerts, ErrorAlerts } from "../../alert";

const NewUser = () => {
  const [user, setUser] = useState({
    userName: "",
    fullName: "",
    email: "",
    isAdmin: false,
    password: "",
    confirmPassword: "",
    showPassword: false,
  });

  const [errorText, setErrorText] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const [createUser, { isLoading }] = userApi.useCreateUserMutation();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const errorValidation = () => {
    setErrorText({
      userName: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    Object.keys(user).map((key) => {
      const value = user[key];
      const name = key;
      if (value.length === 0) {
        setErrorText((prevState) => ({
          ...prevState,
          [name]: `${name} is required`,
        }));
      }
    });
    if (user.password !== user.confirmPassword) {
      setErrorText((prevState) => ({
        ...prevState,
        confirmPassword: `Passwords do not match`,
      }));
    }
  };

  const validation = (data) => {
    const { userName, fullName, email, password, confirmPassword } = data;
    if (userName.length === 0) return false;
    if (fullName.length === 0) return false;
    if (email.length === 0) return false;
    if (password.length === 0) return false;
    if (confirmPassword.length === 0) return false;
    if (password !== confirmPassword) return false;
    return true;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setErrorMessage([]);
    setError(false);
    errorValidation();
    const valid = validation(user);
    if (valid) {
      const { data } = await createUser(user);
      if (data?.status === 400) {
        setErrorMessage([...data.errors]);
        setError(true);
      }
      if (data?.msg) {
        setSuccess(true);
      }
    }
  };

  const handleClickShowPassword = () => {
    setUser({
      ...user,
      showPassword: !user.showPassword,
    });
  };

  return (
    <div className="newUser">
      {success && <ActionAlerts message="User was added" link="users" />}
      {error &&
        errorMessage.map((err) => {
          return <ErrorAlerts message={err.detail} />;
        })}
      <h1 className="newUserTitle">Add User</h1>
      <div className="box-secondary">
        <form onSubmit={onSubmitHandler}>
          <TextField
            id={
              errorText.userName.length === 0
                ? "standard-basic"
                : "standard-error-helper-text"
            }
            variant="standard"
            placeholder="Enter Your First Name"
            label="Username"
            className="inputField"
            error={errorText.userName.length === 0 ? false : true}
            helperText={errorText.userName}
            onChange={onChangeHandler}
            name="userName"
          />

          <TextField
            id={
              errorText.fullName.length === 0
                ? "standard-basic"
                : "standard-error-helper-text"
            }
            variant="standard"
            placeholder="Enter Your Last Name"
            label="Full Name"
            className="inputField"
            name="fullName"
            error={errorText.fullName.length === 0 ? false : true}
            helperText={errorText.fullName}
            onChange={onChangeHandler}
          />
          <TextField
            id={
              errorText.email.length === 0
                ? "standard-basic"
                : "standard-error-helper-text"
            }
            error={errorText.email.length === 0 ? false : true}
            helperText={errorText.email}
            variant="standard"
            placeholder="Enter Your E-mail Address"
            label="E-mail"
            className="inputField"
            type="email"
            name="email"
            onChange={onChangeHandler}
          />
          <Input
            id="standard-adornment-password"
            type={user.showPassword ? "text" : "password"}
            value={user.password}
            name="password"
            onChange={onChangeHandler}
            placeholder="Password"
            className="inputField"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {user.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errorText.password.length !== 0 ? <p>{errorText.password}</p> : null}

          <Input
            id="standard-adornment-password s"
            type={user.showPassword ? "text" : "password"}
            value={user.confirmPassword}
            name="confirmPassword"
            onChange={onChangeHandler}
            placeholder="Confirm Password"
            className="inputField"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {user.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errorText.confirmPassword.length !== 0 ? (
            <p>{errorText.confirmPassword}</p>
          ) : null}

          {/* <FormControl className="inputField" error={Boolean(errors.gender)}>
            <FormLabel>Choose Your Gender</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    inputRef={register({
                      required: "Choose your gender",
                    })}
                  />
                }
                label="Other"
              />
            </RadioGroup>
            <FormHelperText>{errors.gender?.message}</FormHelperText>
          </FormControl> */}

          {/* Select */}

          <Button className="submit-btn" variant="contained" type="submit">
            Add user
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
