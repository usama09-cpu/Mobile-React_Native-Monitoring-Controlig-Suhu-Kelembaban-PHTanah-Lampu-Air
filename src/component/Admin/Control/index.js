import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../../../assets/color';
import ButtonPowerCircle from '../../General/ButtonPowerCircle';

const menuControl = [
  {
    name: 'Air',
    icon: 'water-drop',
  },
  {
    name: 'Lampu',
    icon: 'lightbulb',
  },
];

const Control = () => {
  const [navMenu, setNavMenu] = useState('Air');
  const [uri, setUri] = useState(
    'https://i.pinimg.com/736x/2d/3e/a2/2d3ea2c95472f3cfd320fe28180eba4a.jpg',
  );
  const [airOn, setAirOn] = useState(false);
  const [lampuOn, setLampuOn] = useState(false);

  const handleNav = name => {
    setNavMenu(name);
    if (name === 'Air') {
      setUri(
        'https://i.pinimg.com/736x/2d/3e/a2/2d3ea2c95472f3cfd320fe28180eba4a.jpg',
      );
    } else if (name === 'Lampu') {
      setUri(
        'https://i.pinimg.com/736x/7b/f6/d5/7bf6d5040893966f6811767087d90964.jpg',
      );
    }
  };

  const onPress = () => {
    if (navMenu === 'Air') {
      setAirOn(!airOn);
    } else if (navMenu === 'Lampu') {
      setLampuOn(!lampuOn);
    }
  };

  const colors = () => {
    if (navMenu === 'Air') {
      return {
        backgroundColor: airOn ? color.green : color.red,
      };
    } else if (navMenu === 'Lampu') {
      return {
        backgroundColor: lampuOn ? color.green : color.red,
      };
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.navbar}>
          {menuControl.map((item, index) => {
            const isActive = navMenu === item.name;
            return (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => handleNav(item.name)}>
                <MaterialIcons
                  name={item.icon}
                  size={25}
                  color={isActive ? color.secondary : color.primary}
                />
                <Text
                  style={[styles.menuText, isActive && styles.activeMenuText]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.body}>
          <View style={styles.header}>
            <Image source={{uri: uri}} style={styles.image} />
          </View>
          <View style={styles.content}>
            <Text style={styles.contentheader}>Control {navMenu}</Text>
            <ButtonPowerCircle onPress={onPress} colors={colors()} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Control;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: color.background,
  },
  navbar: {
    zIndex: 1,
    position: 'absolute',
    top: 20,
    minWidth: '40%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 20,
    backgroundColor: color.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    opacity: 0.8,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    color: color.primary,
    fontSize: 14,
  },
  activeMenuText: {
    color: color.secondary,
    fontWeight: 'bold',
  },
  body: {
    gap: 60,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  header: {
    width: '90%',
    height: 300,
  },
  image: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
  content: {
    gap: 10,
    padding: 25,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: color.white,
  },
  contentheader: {
    position: 'absolute',
    top: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: color.primary,
    textAlign: 'center',
  },
});
