import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function TemperatureConvertor() {
  const [celsius, setCelsius] = useState('');

  const fahrenheit =
    celsius !== '' ? ((parseFloat(celsius) * 9) / 5 + 32).toFixed(2) : '';

  return (
    <div className="temperature-box">
      <TemperatureInput
        temperature={celsius}
        onTemperatureChange={setCelsius}
      />

      <p>
        {celsius !== ''
          ? `Température saisie : ${celsius} °C`
          : 'Aucune température saisie'}
      </p>

      {fahrenheit !== '' && <p>Équivalent : {fahrenheit} °F</p>}
    </div>
  );
}

export default TemperatureConvertor;