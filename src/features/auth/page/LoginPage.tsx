import { CustomInput, useForm } from "../../../common";
import './LoginPage.css'

export const LoginPage = () => {

  const { formState: formData, onInputChange} = useForm({
    email: '',
    password: ''
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className="login-page">
      <form
        className="login-form"
        onSubmit={ onSubmit }
      >

        <CustomInput 
          label="Email"
          name="email"
          value={ formData.email  }
          onChange={ onInputChange }
        />

        <CustomInput 
          label="Password"
          name="password"
          value={ formData.password }
          onChange={ onInputChange }
        />

        <button
          className="login-btn"
          type="submit"
        >Enviar</button>

      </form>
    </div>
  )
}
