// import "./form-input.scss";
import { Group, FormInputLabel, FormInputStyles } from "./form-input-styles";

const FormInput = ({ labelText, ...otherInputOptions }) => {
    return (
        <Group>
            {labelText && (
                <FormInputLabel shrink={otherInputOptions.value.length}>{labelText}</FormInputLabel>
            )}
            <FormInputStyles {...otherInputOptions} />
        </Group>
    );
};

export default FormInput;
