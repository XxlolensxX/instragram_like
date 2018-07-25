import './../scss/main.scss';
import 'popper.js';
import 'jquery';
import 'bootstrap';

//rendereando un array de componentes[], si son mas de 1
import React from 'react';
import { render } from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faStroopwafel, faLemon, faUtensils } from '@fortawesome/free-solid-svg-icons';
 
library.add(faEllipsisV,faStroopwafel, faLemon, faUtensils)

const app = document.getElementById('app');

import Header from './app/home/header/components/header.jsx';

import logo from '../images/logo.png'
render( [
    <h1>Nueva Aplicación 
        <span>
            <img src={logo} />
        </span> con React 
</h1>,<Header />],  app)

console.log("Holo Mundo desde la consola");