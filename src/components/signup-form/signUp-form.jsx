import { useState } from "react";

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

import "./sign-up-form.scss";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("password do not match!");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Email already in use!");
            } else {
                console.log("user creation encountered an error", error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    labelText={"Display Name"}
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    labelText={"Email"}
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    labelText={"Password"}
                    type="text"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    labelText={"Confirm Password"}
                    type="text"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />
                {/* <button type="submit">Sign Up</button> */}
                <Button type="submit" buttonText={"Sign Up"} buttonType={"google"}></Button>
            </form>
        </div>
    );
};

export default SignUpForm;
