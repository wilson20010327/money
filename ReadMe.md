---
title: React Native Day 05
tags: react native
description: In a APP it is important to have some page switching, in this example we will talk about bottom navigation.
---
# React Native 05
[Github](https://github.com/wilson20010327/money)

## Enviornment
In the path of your project and install react-navigation
```shell=
npm install @react-navigation/native
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
```
After install the packages you can check them in package.json
![](https://i.imgur.com/xtI9Rmp.png)
## Some Important Steps
1. Import { NavigationContainer } from '@react-navigation/native'
2. Import { createStackNavigator } from '@react-navigation/stack'
3. Pack all the page in  **NavigationContainer** 
4. Creat a variable(in project I name it as Stack) to **createStackNavigator** 
5. Pack the pages which you want to navigate, then they can navigate between themselves 
* APP output ![](https://i.imgur.com/WEUhaKn.gif)
```jsx=
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator();

const Home = ({navigation}) => { //page 1
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button title='Change to page' onPress={() => navigation.push("Page")}/>
    </View>
  );
};
const Page = ({navigation}) => { //page 2
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Page Screen</Text>
      <Button title='Change to Home' onPress={() => navigation.pop()}/>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer /*Use to pack all the pages which you need to navigate, only one in a project*/> 
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false } } /*the specific page, give it a name and can easily to change between pages *//> 
        <Stack.Screen name="Page" component={Page} options={{ headerShown: false } } /*the specific page, give it a name and can easily to change between pages *//> 
      </Stack.Navigator>
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

```