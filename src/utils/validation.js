const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/gm;

export function validate({email,password}) {
  const errors = {}

  const validEmail = (
    regexEmail.test(email) &&
    email &&
    email.length <= 35
  )


  const validPassword = (
    regexPassword.test(password) &&
    password.length >= 6 &&
    password.length <= 10
  )

  console.log(regexPassword.test(password),password.length >= 6,password.length <= 10 );

  if(!validEmail) errors.email ='Debes colocar un correo electrónico'

  if(!validPassword) errors.password='Debes colocar un password válido'
  
  console.log(errors);
  return errors
  }

  export default validate;