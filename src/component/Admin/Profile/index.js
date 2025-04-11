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
  Animated,
  Easing,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
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

  const animatedHeight = useRef(new Animated.Value(0)).current;

  const toggleChangePassword = () => {
    setIsChangePassword(prev => !prev);
    Animated.timing(animatedHeight, {
      toValue: isChangePassword ? 0 : 180,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  };

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
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ios: 60, android: 20})}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <MaterialIcons name="person" size={120} color={color.primary} />
              </View>
              <Text style={styles.textHeader}>{user}</Text>
            </View>

            <View style={styles.content}>
              <View style={styles.changePassword}>
                <View style={styles.passwordHeader}>
                  <Text style={styles.passwordHeaderText}>Change Password</Text>
                  <TouchableOpacity
                    onPress={toggleChangePassword}
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

                <Animated.View
                  style={[styles.animatedContainer, {height: animatedHeight}]}>
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

                  <Button
                    title="Save"
                    onPress={handlePasswordChange}
                    style={{width: '100%'}}
                  />
                </Animated.View>
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
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 60,
  },
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
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
  textHeader: {
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
    gap: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: color.primary,
    width: '100%',
    alignItems: 'center',
  },
  passwordHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: color.primary,
  },
  passwordHeaderText: {
    fontSize: 17,
    color: color.primary,
  },
  animatedContainer: {
    overflow: 'hidden',
    width: '100%',
    gap: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: color.primary,
    borderRadius: 5,
    width: '100%',
    backgroundColor: color.white,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    color: color.black,
    paddingVertical: 8,
  },
  eyeIcon: {
    paddingHorizontal: 5,
  },
});
