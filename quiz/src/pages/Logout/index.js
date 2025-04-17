import { useEffect } from "react";
import { deleteAllCookies } from "../../helpers/cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";

function Logout() {
  const Navigate = useNavigate();
  deleteAllCookies();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin(false));
    Navigate("/login");
  }, []);
  return;
}
export default Logout;
