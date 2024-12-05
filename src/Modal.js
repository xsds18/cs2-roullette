import React, { useState } from "react";
import './modal.scss'; // Убедитесь, что у вас есть стили для модального окна

function CustomModal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="cont-modal">
                <button className="modalBtn" onClick={openModal}>
                    Открыть модальное окно
                </button>

                {isOpen && ( // Условный рендеринг модального окна
                    <div className="modalOverlay"> {/* Фон для модального окна */}
                        <div className="modalWindow">
                            <button className="closeBtn" onClick={closeModal}>Закрыть</button>
                            <form>
                                <label htmlFor="name">Имя</label>
                                <input id="name" type="text" name="name" />
                                <label htmlFor="sname">Фамилия</label>
                                <input id="sname" type="text" name="sname" />
                                <label htmlFor="email">E-mail</label>
                                <input id="email" type="email" name="email" />
                                <button type="submit">Отправить</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default CustomModal;