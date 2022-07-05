import { useState } from "react";
import "./LoginPage.css";
import FormInput from "../loginpage/FormInput";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username/email",
      type: "text",
      placeholder: "Username/Email",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character! It should be a valid email address!",
      label: "Username or Email",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    // {
    //   id: 3,
    //   name: "birthday",
    //   type: "date",
    //   placeholder: "Birthday",
    //   label: "Birthday",
    // },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    // {
    //   id: 5,
    //   name: "confirmPassword",
    //   type: "password",
    //   placeholder: "Confirm Password",
    //   errorMessage: "Passwords don't match!",
    //   label: "Confirm Password",
    //   pattern: values.password,
    //   required: true,
    // },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onClickHandler = () => {
    navigate("/users")
  }

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="login">Log In</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={onClickHandler} className="buttonLogin">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;