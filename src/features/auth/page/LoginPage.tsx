import React, { useState } from "react";
import { CustomInput } from "../../../common";
import './LoginPage.css'

export const LoginPage = () => {

  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  });

  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData( (state) => {
      return {
        ...state,
        [name]: value
      }
    });
  }

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
