import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import SearchHome from './components/search/SearchHome'
// import Fetchdata from './components/fetchdata';

// function Login({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Fetchdata"
//         onPress={() => navigation.navigate('Fetchdata')}
//       />
//       <Button
//         title="Login"
//         onPress={() => navigation.replace('Home')}
//       />
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text></Text>
//       <Button
//         title="Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Logout"
//         onPress={() => navigation.replace('Login')}
//       />
//       <Button
//         title="Goback"
//         onPress={() => navigation.goBack()}
//       />
//     </View>

//   );
// }

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchHome">
        <Stack.Screen name="SearchHome" component={SearchHome} />
        {/* <Stack.Screen name="Fetchdata" component={Fetchdata} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;