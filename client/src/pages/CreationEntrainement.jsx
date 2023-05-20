import React from 'react';

const CreationEntrainement = () => {
  return (
    <div>
      <h1>Création d'un entraînement</h1>
      <form>
        <label htmlFor="title">Titre :</label>
        <input type="text" id="title" name="title" required />
        <br />
        <label htmlFor="description">Description :</label>
        <textarea id="description" name="description"></textarea>
        <br />
        <label htmlFor="date">Date :</label>
        <input type="date" id="date" name="date" required />
        <br />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}

export default CreationEntrainement;
