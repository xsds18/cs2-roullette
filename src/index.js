import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Nav from './Nav';
import CustomModal from './Modal';
import Timer from './Timer';
import Gallery from './Gallery';

const items = [
  { name: "AWP | Dragon Lore", rarity: "legendary", chance: 0.26, color: "#FFD700", img: '/awp_dragon_lore_factory_new_81af54200c.png' },
  { name: "AK-47 | Redline", rarity: "epic", chance: 0.64, color: "#DC143C", img: '/small_ak_47_redline_minimal_wear_7f609d1205.png' },
  { name: "M4A4 | Asiimov", rarity: "rare", chance: 3.2, color: "#FF8C00", img: '/m4a4_asiimov_factory_new_dee112143f.png' },
  { name: "Glock-18 | Water Elemental", rarity: "uncommon", chance: 15.98, color: "#1E90FF", img: '/small_glock_18_water_elemental_factory_new_2d5212abc9.png' },
  { name: "UMP-45 | Blaze", rarity: "common", chance: 70.92, color: "#32CD32", img: '/small_ump_45_blaze_factory_new_1b6b6550cb.png' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Gallery items={items} />
    <Timer />
    <CustomModal />
  </React.StrictMode>
);