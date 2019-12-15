import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import data from './data';
import Timeline from 'screens/timeline';
import Home from 'screens/home';

const DATA = [
  {
    title: 'VENDREDI, 27 SEPTEMBRE 2019',
    data,
  },
  {
    title: 'SAMEDI 28 SEPTEMBRE 2019',
    data,
  },
  {
    title: 'DIMANCHE 29 SEPTEMBRE 2019',
    data,
  },
];

function App() {
  return <Timeline data={DATA} />;
}

const Stack = createSwitchNavigator({ Home, App });

export default createAppContainer(Stack);
