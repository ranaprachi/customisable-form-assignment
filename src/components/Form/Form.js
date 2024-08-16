import { useState } from "react";
import Button from "../button";
import Input from "../input";
import Select from "../select";
import Step from "./Step";

export const formInputResolver = (type) => {
    switch(type) {
        case 'text': 
        case 'password':
        case 'number':
            return Input;
        case 'select':
            return Select;
        default:
            return null;
    }
}
const Form = ({config, submitHandler}) => {
    const {title, steps} = config;
    const [formData, setFormData] = useState(steps);
    const [currentStep, setCurrentStep] = useState(0);

    const onChange = (name, value) => {
        const currentFormStepConfig = formData[currentStep]?.config;
       
        const updatedFormStepConfig = currentFormStepConfig.map((fieldConfig) => {
            if (fieldConfig.name === name) {
                return {
                    ...fieldConfig,
                    value
                };
            }
            return fieldConfig;   
        });

        console.log(updatedFormStepConfig, name)
        
        setFormData((prevFormData) => prevFormData.map((data, index) => {
            if (index === currentStep) {
                return {
                    ...data,
                    config: updatedFormStepConfig
                }
            }
            return data
        }));
    }

    const isValidData = () => {
        // add validation
        return true;
    }

    const onPreviousClick = () => {
        setCurrentStep((prevStep) => {
            const nextStep= prevStep - 1;
            return nextStep >= 0 ? nextStep : prevStep;
        })
    }

    const onSubmit = () => {
        if (isValidData()) {
            submitHandler()
        }
    }

    const onNextClick = () => {
        setCurrentStep((prevStep) => {
            const nextStep= prevStep + 1;
            return nextStep < steps.length ? nextStep : prevStep;
        });
    }

    const currentFormStepConfig = formData[currentStep];
    const {title: formStepTitle, config: formStepConfig} = currentFormStepConfig;
    
    return (
        <div>
            {title}
            <Step config={formStepConfig} title={formStepTitle} onChange={onChange} />
            <div>
                <Button disabled={currentStep === 0} onClick={onPreviousClick}>Previous</Button>
                {steps.length === currentStep + 1 
                    ? (<Button onClick={onSubmit}>Submit</Button>) 
                    : (<Button onClick={onNextClick}>Next</Button>)
                }
            </div>
        </div>
    )
}

export default Form