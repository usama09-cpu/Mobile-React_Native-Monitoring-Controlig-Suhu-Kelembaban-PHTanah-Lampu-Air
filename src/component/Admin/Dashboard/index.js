import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../../../assets/color';
import ItemCircular from '../../General/ItemCircular';
import ItemBar from '../../General/ItemBar';
// import {useWindowDimensions} from 'react-native';
// const user = {
//   id: 1,
//   username: 'admin',
// };

const data = {
  suhu: 35,
  kelembaban: 10,
  PHTanah: 7,
};

const Dashboard = ({user}) => {
  // const {width, height} = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <MaterialIcons name="person" size={50} color={color.primary} />
        </View>
        <View>
          <Text style={styles.title}>{user.username}</Text>
          <Text style={styles.description}>Hello {user.username} !!!</Text>
        </View>
        <TouchableOpacity style={styles.notification}>
          <MaterialIcons name="notifications" size={25} color={color.primary} />
        </TouchableOpacity>
      </View>

      {/* Body Section */}
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.bodyHeaderText}>Dashboard</Text>
        </View>
        <View style={styles.bodyContent}>
          <ItemCircular
            data={data.suhu}
            max={120}
            min={-40}
            size={120}
            width={20}
            colors={
              data.suhu < 0
                ? color.coldLight
                : data.suhu < 15
                ? color.coldDark
                : data.suhu < 30
                ? color.warmLight
                : data.suhu < 40
                ? color.warmDark
                : color.hotLight
            }
            backgroundColor={color.background}
            topTitle="Suhu"
            unit="°C"
          />
          <ItemBar
            data={data.kelembaban}
            title="Kelembaban"
            barColor={
              data.kelembaban < 20
                ? color.veryDry
                : data.kelembaban < 50
                ? color.dry
                : data.kelembaban < 80
                ? color.normal
                : color.humid
            }
            max={100}
            min={0}
          />
          <ItemBar
            data={data.PHTanah}
            title="PH Tanah"
            max={14}
            min={0}
            unit="pH"
            barColor={
              data.PHTanah < 7
                ? color.acidic
                : data.PHTanah === 7
                ? color.neutral
                : color.alkaline
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    gap: 60,
    flex: 1,
    backgroundColor: color.background,
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  avatar: {
    borderWidth: 2,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    borderColor: color.primary,
  },
  header: {
    gap: 10,
    height: 100,
    width: '90%',
    backgroundColor: color.white,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.primary,
    textAlign: 'left',
  },
  description: {
    fontSize: 12,
    color: color.secondary,
    textAlign: 'left',
  },
  notification: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: color.white,
    padding: 5,
  },
  body: {
    // top: 50,
    flex: 1,
    width: '100%',
    backgroundColor: color.white,
    padding: 20,
    // borderRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyHeader: {
    width: '100%',
    backgroundColor: color.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  bodyHeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: color.primary,
    textAlign: 'center',
  },
  bodyContent: {
    gap: 10,
    height: '90%',
    width: '100%',
    backgroundColor: color.white,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
  },
});
