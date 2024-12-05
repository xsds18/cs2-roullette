import { useState, useEffect } from "react";
import './timer.scss';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [inputTime, setInputTime] = useState('00:00:00');

    useEffect(() => {
        let interval = null;

        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            clearInterval(interval);
            setIsRunning(false);
        }

        return () => clearInterval(interval);
    }, [isRunning, time]);

    const timerStart = () => {
        const [hours, minutes, seconds] = inputTime.split(':').map(Number);
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        setTime(totalSeconds);
        setIsRunning(true);
    };

    const timerStop = () => {
        setIsRunning(false);
        setTime(0);
        setInputTime('00:00:00');
    };

    const timerPause = () => {
        setIsRunning(false);
    };

    const formatTime = (seconds) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${secs}`;
    };

    return (
        <>
            <div className="containerTime">
                <div className="timer">
                    <label id="timerLabel">
                        {formatTime(time)}
                    </label>
                    <input 
                        id="timerInput" 
                        type="time" 
                        step='2' 
                        value={inputTime} 
                        onChange={(e) => setInputTime(e.target.value)} 
                    />
                    <div className="btns">
                        <button onClick={timerStart} className="start">
                            Start
                        </button>
                        <button onClick={timerStop} className="stop">
                            Stop
                        </button>
                        <button onClick={timerPause} className="pause">
                            Pause
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timer;