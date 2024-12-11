import React, { useState, useEffect } from 'react';
import './popup.scss'; 

const HelpModal = ({ onClose }) => {
    const [userQuestion, setUserQuestion] = useState('');

    const handleSendQuestion = () => {
        if (userQuestion) {
            alert(`Ваш вопрос: "${userQuestion}" отправлен!`);
            onClose();
        } else {
            alert('Пожалуйста, введите ваш вопрос.');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>Нужна помощь?</h2>
                <p>Если у вас есть вопросы по оформлению заказа или подбору материалов, напишите их ниже:</p>
                <input
                    type="text"
                    value={userQuestion}
                    onChange={(e) => setUserQuestion(e.target.value)}
                    placeholder="Ваш вопрос..."
                    className="question-input"
                />
                <button className='sendBtn' onClick={handleSendQuestion}>Отправить</button>
            </div>
        </div>
    );
};

const Popup = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setModalOpen(true);
        }, 5000); // Показать модальное окно через 5 секунд

        return () => clearTimeout(timer); // Очистка таймера при размонтировании
    }, []);

    return (
        <div className="Popup">
            {isModalOpen && <HelpModal onClose={() => setModalOpen(false)} />}
        </div>
    );
};

export default Popup;