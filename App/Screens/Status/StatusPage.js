import React, {useEffect} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useDispatch, useSelector} from 'react-redux';

import {appAxios} from '../../api';
import HeaderComponent from '../../Components/HeaderComponent';
import {SetQrCode} from '../../Store/action';
import styles from '../../styles';
import UserStatusText from './UserStatusText';
import UserStatusColor from './UserStatusColor';
import {load} from '../../Components/Loader';

const StatusPage = () => {
  const dispatch = useDispatch();
  const {qrCode} = useSelector(store => store.appReducer);

  useEffect(() => {
    appAxios
      .post(
        'http://covid.page.kg/profile.php?token=827ccb0eea8a706c4c34a16891f84e7b',
      )
      .then(({data, ...res}) => {
        dispatch(SetQrCode(data.profile[0]));
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return qrCode ? (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#EA4F3D" />
      <HeaderComponent title="Статус" />

      {/* --- Start User Info --- */}
      <View
        style={[
          styles.StatusUserInfoBLock,
          {backgroundColor: UserStatusColor[qrCode.status].color},
        ]}>
        <Image
          style={{width: 100, height: 100, borderRadius: 50}}
          source={{uri: qrCode.photo}}
        />
        <Text style={styles.StatusInfoName}>{qrCode.name}</Text>
        <Text style={styles.StatusInfoAddress}>{qrCode.address}</Text>
      </View>
      {/* --- End User Info --- */}

      {/* --- Start User QRCODE --- */}
      <View style={styles.QRCodeBlock}>
        <Text
          style={[
            styles.StatusUserStatus,
            {color: UserStatusColor[qrCode.status].color},
          ]}>
          {UserStatusText[qrCode.status].status}
        </Text>
        <QRCode
          size={200}
          color={UserStatusColor[qrCode.status].color}
          value={qrCode.qr_code}
        />
        <Text
          style={[
            styles.StatusUserStatusUpdate,
            {color: UserStatusColor[qrCode.status].color},
          ]}>
          QR код был обновлен {qrCode.qr_update_data}
        </Text>
      </View>

      {/* --- End User QRCODE --- */}
    </View>
  ) : (
    load
  );
};

export default StatusPage;
