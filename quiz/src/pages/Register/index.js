import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken.js";
import { checkExit, register } from "../../service/userService";
import loginimg from "./image/login.png";

function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullname = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const checkExitEmail = await checkExit("email", email);

    console.log("Check Exist Email Result:", checkExitEmail);
    if (checkExitEmail.length > 0) {
      alert("Email already exists");
    } else {
      const options = {
        fullname: fullname,
        email: email,
        password: password,
        token: generateToken(),
      };
      const response = await register(options);
      if (response) {
        navigate("/login");
      } else {
        alert("Registration failed");
      }
    }
  };

  return (
    // <
    //     >
    //     <
    //     form onSubmit = { handleSubmit } >
    //     <
    //     h2 className = "login-title" > Register < /h2>{" "} <
    //     input type = "fullname"
    //     placeholder = "fullname" / >
    //     <
    //     br / >
    //     <
    //     input type = "email"
    //     placeholder = "email" / >
    //     <
    //     br / > < input type = "password"
    //     placeholder = "Password" / >
    //     <
    //     br / >
    //     <
    //     button type = "submit" > Register < /button>{" "} <
    //     /form>{" "} <
    //     />
    <div className="login">
      <div className="login-form">
        <form onSubmit={handleSubmit} className="login__form">
          <h1 className="login__title"> Register </h1>{" "}
          <div className="login__inputs">
            <div className="login__box">
              <input
                type="fullname"
                placeholder="Fullname"
                required
                className="login__input"
              />
              <i className="ri-mail-fill"> </i>{" "}
            </div>{" "}
            <div className="login__box">
              <input
                type="email"
                placeholder="Email"
                required
                className="login__input"
              />
              <i className="ri-mail-fill"> </i>{" "}
            </div>{" "}
            <div className="login__box">
              <input
                type="password"
                placeholder="Password"
                required
                className="login__input"
              />
              <i className="ri-lock-2-fill"> </i>{" "}
            </div>{" "}
          </div>{" "}
          <div className="login__check">
            <div className="login__check-box">
              <input
                type="checkbox"
                className="login__check-input"
                id="user-check"
              />
              <label htmlFor="user-check" className="login__check-label">
                Remember me{" "}
              </label>{" "}
            </div>{" "}
            <a href="#" className="login__forgot">
              Forgot Password ?
            </a>{" "}
          </div>{" "}
          <button type="submit" className="login__button">
            Sign Up{" "}
          </button>{" "}
          <div className="login__register">
            Don & apos; t have an account ? <a href="#"> Register </a>{" "}
          </div>{" "}
        </form>{" "}
        <div className="image-box">
          <img src={loginimg} />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Register;
