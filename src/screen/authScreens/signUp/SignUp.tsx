import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import ToastManager, {Toast} from 'toastify-react-native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        Toast.success('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <ToastManager />
      <Text style={styles.main}>Sign up with Email</Text>
      <Text style={styles.des}>
        Get chatting with friends and family today by signing up for our chat
        app!
      </Text>
      <View style={styles.inputView}>
        <Text style={styles.lable}>Your Name</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Your Name."
          placeholderTextColor="#003f5c"
          onChangeText={userName => setUserName(userName)}
          value={userName}
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.lable}>Email</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.lable}>Password</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
          value={password}
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.lable}>Confirm Password</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
          value={password}
        />
      </View>
      <TouchableOpacity onPress={handleRegister}>
        <ImageBackground
          style={styles.loginBtn}
          source={require('../../../assets/images/background.png')}>
          <Text style={styles.loginBtnText}>Create Account</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
    borderRadius: 20,
    width: 331,

    height: 58,
    marginBottom: 40,
  },
  TextInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#CDD1D0',
    color: '#000E08',
  },
  lable: {
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: '#3D4A7A',
  },
  forgot_button: {
    fontFamily: 'Poppins',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: '#3D4A7A',
    top: 20,
  },
  loginBtn: {
    width: 327,
    borderRadius: 25,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  loginBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '700',
    fontFamily: 'Poppins',
  },
  main: {
    width: 160,
    height: 18,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 18,
    color: '#3D4A7A',
    marginBottom: 5,
  },
  des: {
    width: 293,
    height: 40,
    textAlign: 'center',
    fontWeight: '300',
    lineHeight: 20,
    fontSize: 14,
    color: '#797C7B',
    fontFamily: 'Poppins',
    marginBottom: 50,
  },
  img: {
    height: 48,
    width: 48,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    justifyContent: 'center',
  },
});
