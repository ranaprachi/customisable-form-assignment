import { formInputResolver } from "./Form";

const Step = ({title, config, onChange}) => {

    const onChangeHandler = (fieldName) => (e) => {
        onChange(fieldName, e.target.value)
    }

    return (
        <div>
            <div>{title}</div>
            {config && config.map((formStepData, formStepIndex) => {
                const {type, label, placeholder, 
                    value, error, name} = formStepData;
                const FormField = formInputResolver(type);

                return (
                    <FormField 
                        name={name} 
                        placeholder={placeholder} 
                        onChange={onChangeHandler(name)} 
                        error={error} 
                        value={value} 
                        label={label} 
                    />
                )
            })}
        </div>
    );
}

export default Step;