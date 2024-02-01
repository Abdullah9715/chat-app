import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screen/authScreens/login/Login';
import SignUp from '../screen/authScreens/signUp/SignUp';
import AuthScreen from '../screen/authScreens/mainScreen/AuthScreen';
import Forgot from '../screen/authScreens/forget/Forget';


export type RootStackParamsList={
    signup:undefined,
    login:undefined,
    forgot:undefined,
    auth:undefined

}

const Stack = createStackNavigator<RootStackParamsList>();
export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
<Stack.Screen name='login' component={Login}/>
<Stack.Screen name='signup' component={SignUp}/>
<Stack.Screen name='forgot' component={Forgot}/>
<Stack.Screen name='auth' component={AuthScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}