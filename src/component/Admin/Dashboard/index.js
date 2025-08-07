import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Popover from 'react-native-popover-view';
import color from '../../../assets/color';
import ItemCircular from '../../General/ItemCircular';
import ItemBar from '../../General/ItemBar';

// Data dummy sensor
const data = {
  suhu: 35,
  kelembaban: 10,
  PHTanah: 7,
};

// Data dummy notifikasi
const notifications = [
  {id: 1, message: 'Koneksi internet terputus', time: '10:30'},
  {id: 2, message: 'Sensor suhu kembali normal', time: '10:45'},
  {id: 3, message: 'PH Tanah terlalu asam', time: '11:10'},
  {id: 4, message: 'Kelembaban sangat rendah', time: '11:20'},
  {id: 5, message: 'Koneksi internet pulih', time: '11:30'},
  {id: 6, message: 'Perangkat baru terhubung', time: '12:00'},
  {id: 7, message: 'Sensor pH tidak merespon', time: '12:15'},
];

const Dashboard = ({user}) => {
  const [showPopover, setShowPopover] = useState(false);
  const notifRef = useRef();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <MaterialIcons name="person" size={50} color={color.primary} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.title}>{user.username}</Text>
          <Text style={styles.description}>Hello {user.username} 👋</Text>
        </View>

        <TouchableOpacity
          ref={notifRef}
          style={styles.notification}
          onPress={() => setShowPopover(true)}>
          <MaterialIcons name="notifications" size={25} color={color.primary} />
        </TouchableOpacity>

        <Popover
          isVisible={showPopover}
          from={notifRef}
          onRequestClose={() => setShowPopover(false)}
          placement="bottom"
          popoverStyle={styles.popoverContainer}>
          <View style={styles.popoverContent}>
            <Text style={styles.popoverTitle}>🔔 Notifikasi</Text>

            <ScrollView
              style={styles.scrollArea}
              showsVerticalScrollIndicator={false}>
              {notifications.map(item => (
                <View key={item.id} style={styles.popoverItem}>
                  <MaterialIcons
                    name="notification-important"
                    size={20}
                    color={color.primary}
                    style={{marginRight: 8}}
                  />
                  <View style={{flex: 1}}>
                    <Text style={styles.popoverItemText}>{item.message}</Text>
                    <Text style={styles.popoverItemTime}>{item.time}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </Popover>
      </View>

      {/* Body */}
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
    position: 'relative',
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
    right: 10,
    top: 10,
    backgroundColor: color.white,
    padding: 5,
    borderRadius: 20,
  },
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: color.white,
    padding: 20,
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
  popoverContainer: {
    minWidth: 300,
    // maxWidth: 500,
    maxHeight: 300,
    // backgroundColor: color.white,
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  popoverContent: {
    // gap: 12,
  },
  popoverTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: color.primary,
    borderBottomWidth: 1,
    borderColor: color.primary,
    paddingBottom: 6,
    marginBottom: 6,
    textAlign: 'center',
  },
  scrollArea: {
    maxHeight: 200,
    marginTop: 8,
  },
  popoverItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  popoverItemText: {
    fontSize: 14,
    color: color.text || '#333',
  },
  popoverItemTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
});
