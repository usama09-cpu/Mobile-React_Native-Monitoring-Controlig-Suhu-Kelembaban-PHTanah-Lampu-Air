import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
  Keyboard,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../../../assets/color';
import Dashboard from '../Dashboard';
import Control from '../Control';
import Profile from '../Profile';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

const menu = [
  {name: 'Dashboard', icon: 'monitor'},
  {name: 'Control', icon: 'gamepad'},
  {name: 'Profile', icon: 'person'},
  {name: 'Logout', icon: 'logout'},
];

const Home = ({user, onLogOut}) => {
  const [navMenu, setNavMenu] = useState('Dashboard');
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setIsKeyboardVisible(false),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setIsKeyboardVisible(true),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleLogOut = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Logout',
          style: 'default',
          onPress: () => onLogOut(false),
        },
      ],
      {cancelable: false},
    );
  };

  const navigateTo = name => {
    if (name === 'Logout') {
      handleLogOut();
    } else {
      setNavMenu(name);
    }
  };

  const renderContent = () => {
    switch (navMenu) {
      case 'Dashboard':
        return <Dashboard user={user} />;
      case 'Control':
        return <Control />;
      case 'Profile':
        return <Profile user={user} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderContent()}</View>
      {isKeyboardVisible && (
        <View style={styles.footer}>
          {menu.map(item => {
            const isActive = navMenu === item.name;
            return (
              <TouchableOpacity
                style={[styles.footerItem, isActive && styles.footerItemActive]}
                key={item.name}
                onPress={() => navigateTo(item.name)}>
                <MaterialIcons
                  name={item.icon}
                  size={25}
                  color={isActive ? color.secondary : color.primary}
                />
                <Text
                  style={[
                    styles.footerItemText,
                    isActive && {color: color.secondary},
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    height: '100%',
    backgroundColor: color.background,
  },
  content: {
    flex: 1,
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: color.white,
    borderTopWidth: 2,
    borderColor: color.primary,
    paddingVertical: 10,
  },
  footerItem: {
    alignItems: 'center',
    paddingVertical: 5,
    width: width / menu.length - 10, // Dynamic width
  },
  footerItemActive: {
    backgroundColor: color.lightGray,
    borderRadius: 10,
  },
  footerItemText: {
    marginTop: 5,
    fontSize: 12,
    color: color.primary,
  },
});

export default Home;
