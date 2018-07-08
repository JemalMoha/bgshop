import React from 'react';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import GameCard from './components/GameCard';

const nodeElement = document.getElementById('root');
const games = [
  {
    name: 'Quadropolis',
    thumbnail:
      'https://cf.geekdo-images.com/medium/img/eta9_3bOSIApYNgl_bW-Mn5tykw=/fit-in/500x500/filters:no_upscale()/pic2840020.jpg',
    price: '32.99',
    players: '2-4',
    duration: '60',
  },
  {
    name: 'Quadropolis',
    thumbnail:
      'https://cf.geekdo-images.com/medium/img/eta9_3bOSIApYNgl_bW-Mn5tykw=/fit-in/500x500/filters:no_upscale()/pic2840020.jpg',
    price: '32.99',
    players: '2-4',
    duration: '60',
  },
  {
    name: 'Quadropolis',
    thumbnail:
      'https://cf.geekdo-images.com/medium/img/eta9_3bOSIApYNgl_bW-Mn5tykw=/fit-in/500x500/filters:no_upscale()/pic2840020.jpg',
    price: '32.99',
    players: '2-4',
    duration: '60',
  },
];

render(<GameCard game={games[1]} />, nodeElement);
