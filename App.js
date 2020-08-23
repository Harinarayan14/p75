
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from './screens/LoginScreen';
import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <AppContainer/>
  );
}

const Navigator = createSwitchNavigator({
  LoginScreen:{screen: LoginScreen},
  Write:{screen: WriteScreen}
})

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteScreen},
  Read: {screen: ReadScreen},
},
{
  defaultNavigationOptions:({navigation})=>{
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName;
      if(routeName==='Write'){
        return(
          <Image 
          source={
            require("./assets/write.png")
          }

          style={{width:40,height:40}}
          />
        )
      }
      else if(routeName ==='Read'){
        return(
        <Image
        source={
          require("./assets/read.png")
      }
      style={{width:40,height:40}}
      />
      )
    }
}
 }
}
);

const AppContainer =  createAppContainer(Navigator);

