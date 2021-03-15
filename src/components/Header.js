import react from 'react';
import './Header.css';

export default ({black}) =>{
    return(


        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="Netflix-Logo"></img>
                </a>
            </div>

            <div className="header--usuario">
                <a href="/">
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/user-log-in-or-signup-988719.png" alt="Usuário"></img>
                </a>
            </div>
        </header>

    );
}