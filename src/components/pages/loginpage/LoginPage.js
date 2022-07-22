import { useEffect, useState } from "react";
import "./LoginPage.css";
import FormInput from "../loginpage/FormInput";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "./reducers/authApi";
import { setUser } from "./reducers/authSlice";

const LoginPage = () => {
  //const [data,saveData] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const [loginUser, { error, isError, isLoading }] =
    authApi.useLoginUserMutation();

  const inputs = [
    {
      id: 1,
      name: "emailOrUsername",
      type: "text",
      placeholder: "Username/Email",
      errorMessage:
        "Username should be provided! There should be a valid email address!",
      label: "Username or Email",
      required: true,
    },
    {
      id: 2,
      name: "password",

      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be provided!",
      label: "Password",
      required: true,
    },
  ];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(setUser({ ...user }));
      navigate("/home");
    }
  }, []);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let data = {
      ...values,
    };
    let userData = await loginUser(data);
    if (userData?.data?.status === 401) {
      setErrorMessage(userData.data.message);
    }
    if (userData?.data?.accessToken) {
      let acessToken = userData.data.accessToken;
      const { isAdmin } = userData.data.data.attributes;
      if (acessToken && isAdmin) {
        dispatch(setUser({ ...userData }));
        navigate("/home");
      }
      setErrorMessage("Only admin or author can login");
    }
  };

  return (
    <div className="app">
      <div className="Logo">
        {/* <img src={process.env.PUBLIC_URL + '/Logo.png'} />; */}
        <span className="logo">ESR Tech</span>
      </div>
      <div className="Login">
        <h1 className="login">Log In</h1>
      </div>
      {/* {isLoading ? <Spinner /> : null} */}
      {errorMessage ? <span className="errMsg">{errorMessage}</span> : null}
      <div className="form">
        <form onSubmit={onSubmitHandler}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <div className="button_container">
            <button className="buttonLogin">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
