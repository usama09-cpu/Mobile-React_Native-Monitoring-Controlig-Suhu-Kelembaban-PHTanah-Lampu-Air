import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../../../assets/color';
import Button from '../Button';

const Login = ({ onLoginSuccess, navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleLogin = () => {
    if (!username.trim()) {
      Alert.alert('Error', 'Username is required.');
      return;
    }
    if (!password.trim() || password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters.');
      return;
    }
    if (username === 'admin' && password === 'admin123') {
      onLoginSuccess(username, password);
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <View style={styles.body}>
            <View style={styles.avatar}>
              <MaterialIcons name="person" size={80} color={color.white} />
            </View>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={text => setUsername(text)}
              placeholder="Enter username"
              placeholderTextColor={color.gray}
              autoCapitalize="none"
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter password"
                placeholderTextColor={color.gray}
                secureTextEntry={secureTextEntry}
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity
                onPress={() => setSecureTextEntry(!secureTextEntry)}
                style={styles.eyeIcon}>
                <MaterialIcons
                  name={secureTextEntry ? 'visibility-off' : 'visibility'}
                  size={20}
                  color={color.primary}
                />
              </TouchableOpacity>
            </View>
            <Button
              title="Login"
              backgroundColor={color.white}
              textColor={color.primary}
              width="50%"
              onPress={handleLogin}
            />
            <View style={styles.registerContainer}>
              <Text style={styles.registerPrompt}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    width: '80%',
    maxWidth: 400,
    alignItems: 'center',
    gap: 20,
    padding: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: color.white,
    backgroundColor: color.primaryDark,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: color.white,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: color.black,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: color.white,
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 10,
    color: color.black,
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 4,
    borderColor: color.white,
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  registerPrompt: {
    color: color.white,
  },
  registerText: {
    color: color.white,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
});
