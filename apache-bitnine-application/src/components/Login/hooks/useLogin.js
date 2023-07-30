import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UseLogin() {
  const navigate = useNavigate();
  const defaultValues = { user: "", pass: "" };
  const [error, setError] = useState("");

  const handleSignUpClick = () => {
    navigate("/signup");
  };
  const handleSubmit = (values) => {
    const { username, password } = values;
    if (username === "user" && password === "pass") {
      return navigate("/home");
    }
    setError('Try "user" and "pass" as credentials');
  };

  return { defaultValues, error, handleSubmit, handleSignUpClick };
}

export default UseLogin;
