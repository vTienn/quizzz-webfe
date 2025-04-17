import { useNavigate } from "react-router-dom";
import { login } from "../../service/userService";
import { setCookie } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";
import "./style.css";
import loginimg from "./image/login.png";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const response = await login(email, password);

    if (response.length > 0) {
      setCookie("id", response[0].id, 1);
      setCookie("fullname", response[0].fullname, 1);
      setCookie("email", response[0].email, 1);
      setCookie("token", response[0].token, 1);
      dispatch(checkLogin(true));
      navigate("/topic");
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <form onSubmit={handleSubmit} className="login__form">
          <h1 className="login__title"> Login </h1>{" "}
          <div className="login__inputs">
            <div className="login__box">
              <input
                type="email"
                placeholder="Email ID"
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
            Login{" "}
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

export default Login;
