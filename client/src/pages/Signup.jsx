import React from 'react';

const Signup = () => {
  return (
    <div>
      <h1>S'inscrire</h1>
      <form>
        <label htmlFor="name">Nom complet :</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Adresse e-mail :</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="password">Mot de passe :</label>
        <input type="password" id="password" name="password" required />
        <br />
        <label htmlFor="password-confirm">Confirmation du mot de passe :</label>
        <input type="password" id="password-confirm" name="password-confirm" required />
        <br />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Signup;
