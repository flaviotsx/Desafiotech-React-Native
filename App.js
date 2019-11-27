import React from "react";
//import LoginPage from "./pages/LoginPage";
import Home from "./pages/HomePage";
import Ranking_1 from "./pages/Ranking_1";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Navegador = createStackNavigator({
  Home: {
    screen: Home
  },
  Ranking_1:{
    screen: Ranking_1
  }
},{

  initialRouteName: 'Home',


});
const AppContainer = createAppContainer(Navegador);

export default AppContainer;

