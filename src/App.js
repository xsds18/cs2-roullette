import React, { useState } from "react";
import "./index.scss";

const items = [
  { name: "AWP | Dragon Lore", rarity: "legendary", chance: 0.26, color: "#FFD700", img: '/awp_dragon_lore_factory_new_81af54200c.png' },
  { name: "AK-47 | Redline", rarity: "epic", chance: 0.64, color: "#DC143C", img: '/small_ak_47_redline_minimal_wear_7f609d1205.png' },
  { name: "M4A4 | Asiimov", rarity: "rare", chance: 3.2, color: "#FF8C00", img: '/m4a4_asiimov_factory_new_dee112143f.png' },
  { name: "Glock-18 | Water Elemental", rarity: "uncommon", chance: 15.98, color: "#1E90FF", img: '/small_glock_18_water_elemental_factory_new_2d5212abc9.png' },
  { name: "UMP-45 | Blaze", rarity: "common", chance: 70.92, color: "#32CD32", img: '/small_ump_45_blaze_factory_new_1b6b6550cb.png' },
];

function App() {
  const [user, setUser] = useState(null); // Авторизованный пользователь
  const [balance, setBalance] = useState(1000); // Начальный баланс
  const [roll, setRoll] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleLogin = (username) => {
    setUser({ name: username });
    setBalance(1000); // Устанавливаем начальный баланс
  };

  const listAppend = () => {
    let newList = [];
    items.forEach((element) => {
      let count = Math.ceil(element.chance * 10);
      for (let i = 0; i <= count; i++) {
        newList.push(element);
      }
    });

    while (newList.length < 100) {
      newList = newList.concat(newList);
    }

    newList.sort(() => Math.random() - 0.5);

    return newList;
  };

  const spinRoulette = () => {
    if (roll || balance < 100) return; // Проверяем баланс перед запуском

    setRoll(true);
    setBalance(balance - 100); // Списываем стоимость вращения

    const fullList = listAppend();
    setVisibleItems(fullList);

    const distance = -8000;
    const duration = 3000;
    const itemWidth = 110;
    const centerOffset = 3;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const progress = Math.min(elapsed / duration, 1);
      const easeOut = progress * (2 - progress);
      setTranslateX(distance * easeOut);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        const finalTranslate = distance * easeOut;
        const centerIndex = Math.round(
          -finalTranslate / itemWidth + centerOffset
        );
        const selected = fullList[centerIndex % fullList.length];
        setSelectedItem(selected);

        // Дополняем логику для награды
        const reward = calculateReward(selected.rarity);
        setBalance(balance + reward);

        setRoll(false);
      }
    };

    requestAnimationFrame(animate);
  };

  const calculateReward = (rarity) => {
    switch (rarity) {
      case "legendary":
        return 1000;
      case "epic":
        return 500;
      case "rare":
        return 200;
      case "uncommon":
        return 50;
      case "common":
        return 10;
      default:
        return 0;
    }
  };

  return (
    <div className="container">
      {!user ? (
        <div className="login">
          <h2>Вход</h2>
          <input
            type="text"
            placeholder="Введите имя"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleLogin(e.target.value);
            }}
          />
          <button onClick={() => handleLogin(document.querySelector("input").value)}>
            Войти
          </button>
        </div>
      ) : (
        <>
          <div className="header">
            <h2>Добро пожаловать, {user.name}!</h2>
            <p>Ваш баланс: {balance} монет</p>
          </div>
          <div className="roulette">
            <div
              className="roulette-track"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {visibleItems.map((item, index) => (
                <div
                  key={index}
                  className="roulette-item"
                  style={{ backgroundColor: item.color }}
                >
                  <img src={item.img} alt={item.name} className="item-img" />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            className="startRoulleteBtn"
            onClick={spinRoulette}
            disabled={roll || balance < 100}
          >
            {roll ? "Spinning..." : balance < 100 ? "Недостаточно монет" : "Spin"}
          </button>
          {selectedItem && (
            <div className="result">
              <h3>Выпавший предмет:</h3>
              <p>{selectedItem.name}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;