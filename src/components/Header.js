import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://png2.cleanpng.com/sh/4d604dfc736094d797a83ac9dd94e6d2/L0KzQYm3WcIxN6l6fZH0aYP2gLBuTfxwb5CyjtttZXAwfrb7hvxqgF55fd5udnn2ebF1TfZqdJ4yhtd9ZnzsiH78jvJtd5RwRdNAc4T1cb3wgb12dl5sfdHrbHBme37vgv8udpD8RadrYUS1dIm9hcliOZY8RqgAMkS8SIOBUcU0P2U9TqQ6NEm4R3B3jvc=/kisspng-logo-video-netflix-television-film-netflix-unblock-australia-un-geoblock-hbo-now-5ba42d86e9a1e7.652498281537486214957.png" alt="Powered by The Movie Database"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário"/>
                </a>
            </div>
        </header>
    );
}