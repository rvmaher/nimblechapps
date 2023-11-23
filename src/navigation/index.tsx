import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import TabBarIcon from '../components/TabBarIcon';
import Favourites from '../screens/Favourites';
import Home from '../screens/Home';
import {Colors} from '../constants/Colors';
import {BottomTabScreenParams} from '../typings/navigation';
import {StatusBar} from 'react-native';
import {styles} from '../styles/commonStyle';
import {SafeAreaView} from 'react-native-safe-area-context';

const {Navigator, Screen} = createBottomTabNavigator<BottomTabScreenParams>();

const MainNav: React.FC = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <NavigationContainer>
        <StatusBar backgroundColor={Colors.Secondary} />
        <Navigator
          sceneContainerStyle={styles.sceneContainer}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              return <TabBarIcon icon={route.name} focused={focused} />;
            },
            headerShown: false,
            tabBarStyle: styles.tabbar,
            tabBarLabelStyle: styles.tabbarLabel,
          })}>
          <Screen name="Home" component={Home} />
          <Screen name="Favourites" component={Favourites} />
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainNav;
