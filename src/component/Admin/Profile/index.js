import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import color from '../../../assets/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../General/Button';

const Profile = () => {
  const [isChangePassword, setIsChangePassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(true);
  const [secureTextEntryConfirmPassword, setSecureTextEntryConfirmPassword] =
    useState(true);
  const user = 'Usama';

  const handlePasswordChange = () => {
    if (!password.trim() || !confirmPassword.trim()) {
      Alert.alert('Error', 'Password cannot be empty');
    } else if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters');
    } else if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
    } else {
      Alert.alert('Success', 'Password changed successfully');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.Container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 20 })}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <SafeAreaView style={styles.Container}>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <MaterialIcons name="person" size={120} color={color.primary} />
              </View>
              <Text style={styles.textheader}>{user}</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.changePassword}>
                <View style={styles.passwordHeader}>
                  <Text style={styles.passwordHeaderText}>
                    Change Password
                  </Text>
                  <TouchableOpacity
                    onPress={() => setIsChangePassword(!isChangePassword)}
                    activeOpacity={0.7}>
                    <MaterialIcons
                      name={
                        isChangePassword
                          ? 'keyboard-arrow-up'
                          : 'keyboard-arrow-down'
                      }
                      size={40}
                      color={color.primary}
                    />
                  </TouchableOpacity>
                </View>
                {isChangePassword && (
                  <>
                    <View style={styles.passwordContainer}>
                      <TextInput
                        style={styles.passwordInput}
                        placeholder="Enter password"
                        placeholderTextColor={color.gray}
                        secureTextEntry={secureTextEntryPassword}
                        value={password}
                        onChangeText={text => setPassword(text)}
                      />
                      <TouchableOpacity
                        onPress={() =>
                          setSecureTextEntryPassword(!secureTextEntryPassword)
                        }
                        style={styles.eyeIcon}
                        activeOpacity={0.7}>
                        <MaterialIcons
                          name={
                            secureTextEntryPassword
                              ? 'visibility-off'
                              : 'visibility'
                          }
                          size={20}
                          color={color.primary}
                        />
                      </TouchableOpacity>
                    </View>

                    <View style={styles.passwordContainer}>
                      <TextInput
                        style={styles.passwordInput}
                        placeholder="Enter confirm password"
                        placeholderTextColor={color.gray}
                        secureTextEntry={secureTextEntryConfirmPassword}
                        value={confirmPassword}
                        onChangeText={text => setConfirmPassword(text)}
                      />
                      <TouchableOpacity
                        onPress={() =>
                          setSecureTextEntryConfirmPassword(
                            !secureTextEntryConfirmPassword,
                          )
                        }
                        style={styles.eyeIcon}
                        activeOpacity={0.7}>
                        <MaterialIcons
                          name={
                            secureTextEntryConfirmPassword
                              ? 'visibility-off'
                              : 'visibility'
                          }
                          size={20}
                          color={color.primary}
                        />
                      </TouchableOpacity>
                    </View>
                    <Button title="Save" onPress={handlePasswordChange} />
                  </>
                )}
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    gap: 60,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  header: {
    width: '90%',
    padding: 30,
    gap: 10,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: color.white,
  },
  avatar: {
    borderWidth: 4,
    borderColor: color.primary,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    width: 140,
  },
  textheader: {
    fontSize: 25,
    color: color.primary,
  },
  content: {
    paddingHorizontal: 40,
    paddingVertical: 60,
    width: '100%',
    height: '100%',
    backgroundColor: color.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  changePassword: {
    gap: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: color.primary,
    minHeight: 40,
  },
  passwordHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  passwordHeaderText: {
    fontSize: 17,
    color: color.primary,
  },
  passwordContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: color.primary,
    borderRadius: 5,
    width: '100%',
    backgroundColor: color.white,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 10,
    color: color.black,
  },
  eyeIcon: {
    paddingHorizontal: 5,
  },
});
