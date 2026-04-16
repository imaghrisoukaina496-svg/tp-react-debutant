import { useState } from 'react';
import './App.css';
import { UtilisateurContext } from './UtilisateurContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Alice',
    connecte: true,
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div className="app">
        <div className="overlay">
          <header className="hero">
            <h1>TP React Débutant</h1>
            <p>
              Gestion de l’état, formulaires, composants et contexte React
            </p>
          </header>

          <section className="card">
            <h2>Formulaire Contrôlé</h2>
            <FormulaireControle />
          </section>

          <section className="card">
            <h2>Formulaire Non-Contrôlé</h2>
            <FormulaireNonControle />
          </section>

          <section className="card">
            <h2>Lifting State Up</h2>
            <TemperatureConvertor />
          </section>

          <section className="card">
            <h2>Profil Utilisateur</h2>
            <Profil />
          </section>
        </div>
        <footer className="footer">
          <p>Réalisé avec React par Soukaina </p>
        </footer>
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;