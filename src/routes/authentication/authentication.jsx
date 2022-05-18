import SignUpForm from "../../components/signup-form/signUp-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    );
};

export default Authentication;
