import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator();

const Home = ({navigation}) => { //page 1
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>I am Account Home Screen</Text>
      <Button title='Change to page' onPress={() => navigation.push("Page")}/>
    </View>
  );
};
const Page = ({navigation}) => { //page 2
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>I am Account Page Screen</Text>
      <Button title='Change to Home' onPress={() => navigation.pop()}/>
    </View>
  );
};

export default function Account_page() {
  return (
   
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false } } /*the specific page, give it a name and can easily to change between pages *//> 
        <Stack.Screen name="Page" component={Page} options={{ headerShown: false } } /*the specific page, give it a name and can easily to change between pages *//> 
      </Stack.Navigator>
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
