import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import styles from '../../styles';
import IMAGE from '../../assets/SVG';

const ProfilePage = ({navigation}) => {
  const DATA = [
    {
      text: 'Настройки',
      icon: IMAGE.SettingsIcon,
      navigation: () => navigation.navigate('Settings'),
    },
    {
      text: 'Тарифы',
      icon: IMAGE.TarrifsIcon,
      navigation: () => navigation.navigate('Tariffs'),
    },
    {
      text: 'О программе',
      icon: IMAGE.AboutIcon,
      navigation: () => navigation.navigate('About'),
    },
    {
      text: 'Помощь',
      icon: IMAGE.SupportIcon,
      navigation: () => navigation.navigate('Support'),
    },
    {
      text: 'Выйти',
      icon: IMAGE.ExitIcon,
      navigation: () => navigation.navigate('Exit'),
    },
  ];

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#EA4F3D" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* --- Start Header --- */}
        <View style={styles.ProfileHeader}>
          <Text style={styles.MyProfileText}>Мой профиль</Text>
          <View style={styles.HeaderProfileBlock}>
            <View style={styles.ProfileHeaderAva}>{IMAGE.AddIcon}</View>
            <View style={{marginLeft: 15}}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
                Азим Дженалиев
              </Text>
              <Text style={{fontSize: 12, color: 'white', marginTop: 14}}>
                Лицевой счет
              </Text>
              <Text style={{fontWeight: '500', color: 'white'}}>
                0 702 752 658
              </Text>
            </View>
          </View>
        </View>
        {/* --- End Header --- */}

        {/* --- Start Body --- */}

        {/* --- Start MyBalance --- */}
        <View style={styles.ProfileBalance}>
          <View>
            <Text style={{fontSize: 10}}>Текущий баланс</Text>
            <Text style={{fontSize: 20, fontWeight: '500'}}>990,00 </Text>
          </View>
          <View style={[styles.fdRow, {alignSelf: 'center'}]}>
            <Text style={styles.ProfileReplenishText}>Пополнить</Text>
            <View>{IMAGE.ReplenishIcon}</View>
          </View>
        </View>
        {/* --- End MyBalance --- */}

        {/* --- Start announcements --- */}
        <Text style={{fontSize: 18, marginTop: 25, marginLeft: 20}}>
          Мои объявления
        </Text>
        <TouchableOpacity>
          <View style={styles.ProfileAddBlock}>
            <View>{IMAGE.PlusIcon}</View>
            <Text style={styles.ProfileAddText}>{'Добавить\nобъявление'}</Text>
          </View>
        </TouchableOpacity>
        {/* --- End announcements --- */}
        <View style={[styles.ph20, {marginTop: 40}]}>
          {DATA.map((item, key) => {
            return (
              <TouchableOpacity
                onPress={item.navigation}
                key={key}
                style={[
                  styles.fdRow,
                  {marginBottom: 35, alignItems: 'center'},
                ]}>
                <View>{item.icon}</View>
                <Text style={{marginLeft: 18, fontSize: 18}}>{item.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* --- End Body --- */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;
