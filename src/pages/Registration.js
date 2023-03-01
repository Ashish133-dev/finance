import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../component/CustomInput";
import { toast } from "react-toastify";
import { Layout } from "../component/Layout";
import { randomStrGenerator } from "../util";

const initialState=()=>{
      fName = "",
      lName = "",
      email = "",
      password="",
      confirmpassword="",
    }





export const Registration = () => {
  const [frm, setFrm] = useState({initialState});
  const [error, setError] = useState("");
  const handleOnchange = (e) => {
    const { name, value } = e.target;

    

    if (name === "password") {
      setError("");
      value.length < 6 && setError("password must be 6 charecters long");
      !/[0-9]/.test(value) && setError("Number is required");
      !/[A-Z]/.test(value) && setError("Upper case is required");
      !/[a-z]/.test(value) && setError("Lower case is required");
    }

    setFrm({
      ...frm,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = frm;
    if (confirmPassword !== rest.password) {
      return toast.error("Password do not match!");
    }
    //reading data from local storage//
const oldUsersStr = localStorage.getItem("users")
const oldUsers = oldUsersStr ? JSON.parse(oldUsersStr) :[]

//check email
const isExit = oldUsers.find(({email}) => email ===rest.email)
if(isExit) {
  return toast.error("This email already have a account")
}



 //Storing in local storage

    localStorage.setItem"users", JSON.stringify([...oldUsers,{...rest, id: randomStrGenerator(6)}]);

    toast.success("your account has been created you can login now");
    setFrm(initialState);
  };
  const inputs = [
    {
      value: frm.fName,

      label: "First Name",
      name: "fName",

      required: true,
      placeholder: "sam",
    },
    {
      value: frm.lName,
      label: "Last Name",
      name: "lName",

      required: true,
      placeholder: "smith",
    },
    {
      value: frm.Email,
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "sam@email.com",
    },
    {
      value: frm.Password,
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "****",
    },
    {
      value: frm.confirmPassword,
      label: "Password",
      name: "confirmPassword",
      type: "password",
      required: true,
      placeholder: "****",
    },
  ];

  return (
    <Layout>
      <div className="w-50 m-auto">
        <Form
          onSubmit={handleOnSubmit}
          className=" mt-5 border p-3 py-5 rounded shadow-lg"
        >
          <h3>Join our system now!</h3>
          <hr />
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnchange} />
          ))}
          <Form.Group>
            <Form.Text>
              your password must contain at least 6 charecter including at least
              1 number and one upper and lower case
            </Form.Text>
            {error && (
              <ul>
                <li className="text-danger fw-bolder mt-3">{error}</li>
              </ul>
            )}
          </Form.Group>
          <div className="d-grid py-3">
            <Button disabled={error} variant="primary" type="submit">
              Register
            </Button>
          </div>
          <div className="text-end">
            Forget password? <a href="/password-reset">Reset </a> now
          </div>
        </Form>
      </div>
    </Layout>
  );
};
