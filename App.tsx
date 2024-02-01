import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './src/screen/authScreens/login/Login';
import SignUp from './src/screen/authScreens/signUp/SignUp';
import Forgot from './src/screen/authScreens/forget/Forget';
import AuthScreen from './src/screen/authScreens/mainScreen/AuthScreen';
// import Login from './src/screen/authScreens/login/Login';
// import Navigation from './src/navigation/Navigation';
// import SignUp from './src/screen/authScreens/signUp/Signup';
// import Forgot from './src/screen/authScreens/forget/Forget';
// import AuthScreen from './src/screen/authScreens/mainScreen/AuthScreen';

export type RootStackParamsList={
  signup:undefined,
  login:undefined,
  forgot:undefined,
  auth:undefined

}

const Stack = createStackNavigator<RootStackParamsList>();
function App(): React.JSX.Element {
  

  return (
    <>
   <NavigationContainer>
    <Stack.Navigator>
<Stack.Screen name='login' component={Login}/>
<Stack.Screen name='signup' component={SignUp}/>
<Stack.Screen name='forgot' component={Forgot}/>
<Stack.Screen name='auth' component={AuthScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
    {/* <Login /> */}
    {/* <SignUp/>
    <Forgot/>
    <AuthScreen/>   */}
    </>
  );
}
export default App;
