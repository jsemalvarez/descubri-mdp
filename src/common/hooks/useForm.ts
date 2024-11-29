import { ChangeEvent, useEffect, useMemo, useState } from 'react';


type ValidationFunction = (value: string) => boolean;
type ValidateRule = [ValidationFunction, string];
type ValidateRules = { [key: string]: ValidateRule}
type FormState = { [key:string]: string }

export const useForm = <T extends FormState>( 
    initialForm: T = {} as T, 
    formValidations: ValidateRules = {} 
) => {
  
    const [ formState, setFormState ] = useState<T>( initialForm );
    const [ formValidation, setFormValidation ] = useState<{[key: string]: string | null}>({});

    useEffect(() => {
        createValidators();
    }, [ formState ])

    useEffect(() => {
        setFormState( initialForm );
    }, [ initialForm ])
    
    
    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [ formValidation ])


    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        
        const formCheckedValues: { [key: string]: string | null } = {};
        
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );
    }



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}