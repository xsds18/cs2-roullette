import './navigation.scss';
import React, { useState } from "react";

function Nav() {

    return(
        <>
        <div>
            <nav className='navPanel'>
                <li>
                    <a href='/'>
                        Главная
                    </a>
                </li>
                <li>
                    <a href='/'>
                        Кейсы
                    </a>
                </li>
                <li>
                    <a href='/'>
                        Играть
                    </a>
                </li>
                <li>
                    <a href='/'>
                        Зарегестрироваться
                    </a>
                </li>
                <li>
                    <a href='/'>
                        Войти
                    </a>
                </li>
            </nav>
        </div>
        </>
    )
}

export default Nav;