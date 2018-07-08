import React from 'react';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import GameCard from './components/GameCard';

const nodeElement = document.getElementById('root');

render(<GameCard />, nodeElement);
