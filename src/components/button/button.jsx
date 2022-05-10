import "./button.scss";

const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
};
const Button = ({ buttonText, buttonType, ...buttonOptions }) => {
    return (
        <button
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...buttonOptions}
        >
            {buttonText}
        </button>
    );
};

export default Button;
