import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <button id="battery-status">show Battery Status</button>
  </div>
`;
async function monitorBattery() {
  const battery = await navigator.getBattery();
  function updateBatteryStatus() {
    console.log(`Battery Level: ${battery.level * 100}%`);
    console.log(`Is Charging: ${battery.charging}`);
  }
  updateBatteryStatus();
  battery.addEventListener('levelchange', updateBatteryStatus);
  battery.addEventListener('chargingchange', updateBatteryStatus);
}

let button = document.getElementById('battery-status');
button.addEventListener('click', monitorBattery);

setupCounter(document.querySelector('#counter'));
