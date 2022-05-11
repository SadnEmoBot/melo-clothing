import { useState } from "react";

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                case "auth/invalid-email":
                    alert("incorrect email, please check again");
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };
    return (
        <div className="sign-up-container">
            <h2>I already hava an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
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
                <div className="buttons-container">
                    <Button type="submit" buttonText={"SIGN IN"}></Button>
                    <Button
                        type="button"
                        buttonText={"SIGN IN WITH GOOGLE"}
                        buttonType={"google"}
                        onClick={signInWithGoogle}
                    ></Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
