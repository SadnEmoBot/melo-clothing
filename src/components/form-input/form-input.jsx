import "./form-input.scss";

const FormInput = ({ labelText, ...otherInputOptions }) => {
    return (
        <div className="group">
            {labelText && (
                <label
                    className={`${otherInputOptions.value.length ? "shrink" : ""}form-input-label`}
                >
                    {labelText}
                </label>
            )}
            <input className="form-input" {...otherInputOptions} />
        </div>
    );
};

export default FormInput;
