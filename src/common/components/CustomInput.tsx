import { InputHTMLAttributes } from "react"


interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    error?: string;
}



export const CustomInput = ({
    label,
    error,
    type = 'text',
    ...props
}: CustomInputProps) => {
  return (
    <div className="input-field">

        {
            (error)
            ? (
                <span className="input-field__error">{error}</span>
            ):(
                <label 
                    className="input-field__label"
                    htmlFor={props.id || props.name}
                >{label}</label>
            )
        }

        <input
            className={`input-field__input ${error ? '':'input-field__input--error'}`}
            type={type}
            {...props} // Pasa todas las propiedades al input
        />

    </div>
  )
}
