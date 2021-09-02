import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from '../../styles';
import NotiffComponent from './NotiffComponent';
import HeaderComponent from '../../Components/HeaderComponent';
import IMAGE from '../../assets/SVG';
import {appAxios} from '../../api';
import {SetNotiff} from '../../Store/action';
import {load} from '../../Components/Loader';

const NotificationsPage = ({navigation}) => {
  const dispatch = useDispatch();
  const {notiffications} = useSelector(store => store.appReducer);
  useEffect(() => {
    appAxios
      .post(`notes.php?token=827ccb0eea8a706c4c34a16891f84e7b`)
      .then(({data, ...res}) => {
        dispatch(SetNotiff(data.notes));
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#EA4F3D" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderComponent title="Уведомления" navigation={navigation} />
        <View style={styles.ph20}>
          <Text style={{fontSize: 16, fontWeight: '900', marginTop: 35}}>
            Новые уведомления
          </Text>
          {Boolean(notiffications)
            ? notiffications.map((item, key) => (
                <NotiffComponent
                  key={key}
                  title={item.title}
                  date={item.data}
                  type={item.type}
                />
              ))
            : load}
          <View
            style={{
              backgroundColor: '#E4E4E4',
              height: 1,
              marginTop: 25,
              marginBottom: -10,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationsPage;
