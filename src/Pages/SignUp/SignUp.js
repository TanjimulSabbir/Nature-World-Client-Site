import React from "react";
import useTitle from "../../Hooks/useTitle";
import SignUpForm from "./SignUpForm";


const SignUp = () => {
  useTitle('SignUp')
  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
