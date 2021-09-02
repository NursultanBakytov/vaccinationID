import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';

import {appAxios} from '../../api';
import styles from '../../styles';
import {ToastShow} from '../../Components/ToastShow';
import ShadowButton from '../../Components/ShadowButton';
import {Token} from '../../Store/action';

const Login = props => {
  const dispatch = useDispatch();
  // -------------------------------------------------------------
  const [Phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');

  const [PhoneFocused, setPhoneFocused] = useState(true);
  const [PasswordFocused, setPasswordFocused] = useState(true);
  // -------------------------------------------------------------
  const SendData = () => {
    if (Phone === '') {
      ToastShow('Введите ИНН!', 2000);
    } else if (Password === '') {
      ToastShow('Введите пароль!', 2000);
    } else {
      const data = new FormData();

      data.append('phone', Phone);
      data.append('password', Password);

      appAxios
        .get(`login.php?login=${Phone}&password=${Password}`)
        .then(({data, ...res}) => {
          if (data.result === 'success') {
            dispatch(Token(data.token)), props.navigation.navigate('Drawer');
          } else {
            ToastShow(data.msg, 2000);
          }
        })
        .catch(e => {
          e === 'Network Error'
            ? ToastShow('Проверьте интернет соединение', 2000)
            : console.log(e);
        });
    }
  };
  // -------------------------------------------------------------

  return (
    <SafeAreaView style={styles.fl1}>
      <Toast style={{zIndex: 1}} ref={ref => Toast.setRef(ref)} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.LoginIconBlock}>
          <Image
            resizeMode="contain"
            style={styles.LoginIcon}
            source={require('../../assets/logo.png')}
          />
          <Text style={{fontSize: 30, color: '#ED1B24', fontWeight: 'bold'}}>
            ПАСПОРТ
          </Text>
          <Text style={{fontSize: 30, color: '#1CB936', fontWeight: 'bold'}}>
            ВАКЦИНАЦИИ
          </Text>
        </View>
        {/* --- Start Inputs --- */}
        <View style={styles.LoginInputBlock}>
          {Boolean(PhoneFocused) && (
            <Text style={{color: '#9C9C9C', fontSize: 10}}>ИНН</Text>
          )}
          <TextInput
            onFocus={() => {
              setPhoneFocused(!PhoneFocused);
            }}
            onBlur={() => {
              setPhoneFocused(!PhoneFocused);
            }}
            value={Phone}
            onChangeText={setPhone}
            placeholder="Введите ваш ИНН"
            placeholderTextColor="#9C9C9C"
            style={{marginBottom: PhoneFocused ? 5 : -20, color: 'black'}}
          />
        </View>

        <View style={[styles.LoginInputBlock, {marginBottom: 30}]}>
          {Boolean(PasswordFocused) && (
            <Text style={{color: '#9C9C9C', fontSize: 10}}>Пароль</Text>
          )}
          <TextInput
            onFocus={() => {
              setPasswordFocused(!PasswordFocused);
            }}
            onBlur={() => {
              setPasswordFocused(!PasswordFocused);
            }}
            value={Password}
            onChangeText={setPassword}
            placeholder="Введите ваш пароль"
            secureTextEntry={true}
            placeholderTextColor="#9C9C9C"
            style={{marginBottom: PasswordFocused ? 5 : -20, color: 'black'}}
          />
        </View>
        {/* --- End Inputs --- */}
        {/* --- Send Button --- */}
        <ShadowButton styles={{marginTop: 20}} text="ВОЙТИ" Press={SendData} />
        {/* <Vi onPress={SendData} style={styles.LoginButton}> */}
        {/* <Text style={styles.white}>ВОЙТИ</Text> */}
        {/* </Vi> */}
        {/* ------------------- */}
        <Text style={{alignSelf: 'center', marginTop: 50, color: '#8A8A8A'}}>
          Забыли пароль?
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.LoginRegistrText}>Регистрация</Text>
        </TouchableOpacity>
        {/* ------------------- */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
