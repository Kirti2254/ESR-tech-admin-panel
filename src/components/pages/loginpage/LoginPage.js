import { useState } from "react";
import "./LoginPage.css";
import FormInput from "../loginpage/FormInput";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux"
import { authApi } from "./reducers/authApi";

const LoginPage = () => {
  //const [data,saveData] = useState(false);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    emailOrUsername: "",
    password: "",
  });

  const [loginUser] = authApi.useLoginUserMutation();

  const inputs = [
    {
      id: 1,
      name: "emailOrUsername",
      type: "text",
      placeholder: "Username/Email",
      errorMessage:
        // "Username should be 3-16 characters and shouldn't include any special character! It should be a valid email address!",
        "Username should be provided! There should be a valid email address!",
      label: "Username or Email",
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
      id: 2,
      name: "password",

      type: "password",
      placeholder: "Password",
      errorMessage:
        // "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        "Password should be provided!",
      label: "Password",
      // pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
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

  // const handleSubmit = (e) => {
  //   console.log(e);
  //   e.preventDefault();
  // };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onClickHandler = async (e) => {
    e.preventDefault();
    let data = {
      ...values
    }
    console.log(data)
    let userData = await loginUser(data);
    if(userData?.data?.accessToken) {
      navigate("/users")
    }
  }

  return (
    <div className="app">
      
      <div className='Logo'>
      {/* <img src={process.env.PUBLIC_URL + '/Logo.png'} />; */}
            <span className='logo'>ESR Tech</span>
            
            </div>
            <div className="Login">
             <h1 className="login">Log In</h1>
        </div>
        <div className="form">
       <form>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="button_container">
<button className="buttonLogin" onClick={onClickHandler}>Submit</button>
        </div>
        
 
      </form>

      </div>
      
    
    </div>
  );
};

export default LoginPage;