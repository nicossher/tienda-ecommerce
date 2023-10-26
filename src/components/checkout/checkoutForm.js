import { useState } from "react";

function CheckoutForm({ onConfirm }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === confirmEmail) {
      const userData = {
        name,
        lastName,
        phone,
        email,
      };

      if (Object.keys(userData).some((key) => userData[key] === "")) {
        alert("Complete todos los campos");
      } else {
        onConfirm(userData);
      }
    } else {
      console.log("mails no coinciden");
    }
  };

  return (
    <div className='container mt-5'>
      <form
        className='row g-3 needs-validation'
        noValidate
        onSubmit={handleSubmit}
      >
        <div className='col-md-4 mb-3 offset-md-2'>
          <label for='inputName' className='form-label'>
            Nombre
          </label>
          <input
            type='text'
            name='formName'
            className='form-control'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className='invalid-feedback'>Es necesario poner el nombre.</div>
        </div>

        <div className='col-md-4 mb-3 needs-validation'>
          <label for='inputLastName' className='form-label'>
            Apellido
          </label>
          <input
            type='text'
            name='formLastName'
            className='form-control'
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <div className='invalid-feedback'>
            Es necesario poner los apellidos.
          </div>
        </div>
        <div className='col-md-8 mb-3 needs-validation offset-md-2'>
          <label for='inputNumber' className='form-label'>
            Telefono
          </label>
          <input
            type='text'
            name='formNumber'
            className='form-control'
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className='invalid-feedback'>
            Es necesario poner el numero de telefono.
          </div>
        </div>
        <div className='col-md-8 mb-3 needs-validation offset-md-2'>
          <label for='inputEmail' className='form-label'>
            Email
          </label>
          <input
            type='text'
            name='formEmail'
            className='form-control'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className='invalid-feedback'>Es necesario poner el mail.</div>
        </div>
        <div className='col-md-8 mb-3 needs-validation offset-md-2'>
          <label for='inputConfirmEmail' className='form-label'>
            Confirmar Email
          </label>
          <input
            type='text'
            name='formConfirmEmail'
            className='form-control'
            value={confirmEmail}
            required
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary col-md-8 offset-md-2'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
