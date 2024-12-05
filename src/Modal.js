import React, { useState } from 'react';
import "./modal.scss";

const CustomModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        setTimeout(() => {
            setIsAnimating(true);
        }, 10);
    };

    const closeModal = () => {
        const modalOverlay = document.querySelector('.modalOverlay');
        const modalWindow = document.querySelector('.modalWindow');
    
        modalOverlay.classList.remove('show');
        modalWindow.classList.remove('show');
    
        
        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };

    return (
        
        <div className="cont-modal">
            <button className="modalBtn" onClick={openModal}>
                Открыть модальное окно
            </button>

            {isOpen && (
                <div className={`modalOverlay ${isOpen ? 'show' : ''}`}> {}
                    <div className={`modalWindow ${isOpen ? 'show' : ''}`}>
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
    );
};

export default CustomModal;