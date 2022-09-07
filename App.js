import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from "@expo/vector-icons";
import Account_page from './index/account';
import Input_page from './index/input';
import List_page from './index/list';
const tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer /*Use to pack all the pages which you need to navigate, only one in a project*/>
      <tab.Navigator initialRouteName="Input">
        <tab.Screen name="Input" component={Input_page} options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {//to specific the icon show on the bottom 
            return (
              <Ionicons
                name="wallet"
                size={30}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }} /*the specific page, give it a name and can easily to change between pages */ />
        <tab.Screen name="List" component={List_page} options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="list"
                size={30}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }} /*the specific page, give it a name and can easily to change between pages */ />
        <tab.Screen name="Account" component={Account_page} options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-person-circle-outline"
                size={30}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }} /*the specific page, give it a name and can easily to change between pages */ />
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
