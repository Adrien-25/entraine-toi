import React from 'react';

const Profil = () => {
  return (
    <div>
      <h1>Profil</h1>
      <form>
        <label htmlFor="name">Nom complet :</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Adresse e-mail :</label>
        <input type="email" id="email" name="email" required />
        <br />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default Profil;
