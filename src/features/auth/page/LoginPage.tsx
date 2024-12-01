import { CustomInput, useForm } from "../../../common";
import { useAuth } from "../hooks/useAuth";
import './LoginPage.css'

const initialForm = {
  email: '',
  password: ''
}

export const LoginPage = () => {

  const { formState: formData, onInputChange} = useForm(initialForm)

  const { onLogin } = useAuth({})

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ email: formData.email, password: formData.password })
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
