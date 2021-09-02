import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Switch,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import HeaderComponent from '../../Components/HeaderComponent';
import ImagePicker from '../../Components/native/ImagePicker';
import ShadowButton from '../../Components/ShadowButton';
import styles from '../../styles';

const Settings = ({navigation}) => {
  const [Name, setName] = useState('');
  const [NameFocused, setNameFocused] = useState(true);
  // ------------------------------------
  const [Phone, setPhone] = useState('');
  const [PhoneFocused, setPhoneFocused] = useState(true);
  // ------------------------------------
  const [OldPass, setOldPass] = useState('');
  const [OldPassFocused, setOldPassFocused] = useState(true);
  // ------------------------------------
  const [NewPass, setNewPass] = useState('');
  const [NewPassFocused, setNewPassFocused] = useState(true);
  // ------------------------------------
  const [NewPassTwo, setNewPassTwo] = useState('');
  const [NewPassTwoFocused, setNewPassTwoFocused] = useState(true);
  // ------------------------------------
  const [onNotiff, setonNotiff] = useState(false);
  const toggleNotiff = () => setonNotiff(previousState => !previousState);
  // ------------------------------------
  const [onComments, setonComments] = useState(false);
  const toggleComments = () => setonComments(previousState => !previousState);
  // ------------------------------------
  const [onStatus, setonStatus] = useState(false);
  const toggleStatus = () => setonStatus(previousState => !previousState);
  // ------------------------------------
  const SaveName = () => {};
  const SavePass = () => {};

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderComponent title="Профиль" navigation={navigation} />
        <ImagePicker />

        {/* --- Start Inputs --- */}
        <CustomInput
          value={Phone}
          Title="Личные данные"
          Placeholder="Введите ФИО"
          setValueFocused={setPhoneFocused}
          ValueFocused={PhoneFocused}
          onChange={setPhone}
        />
        {/* -------------------------- */}
        <CustomInput
          value={Name}
          Placeholder="Введите телефон"
          Title="Мой телефон"
          setValueFocused={setNameFocused}
          ValueFocused={NameFocused}
          onChange={setName}
        />
        {/* --- End Inputs --- */}

        {/* --- Start Switches --- */}
        <Text
          style={{
            marginTop: 53,
            marginLeft: 20,
            fontSize: 16,
          }}>
          Push уведомления
        </Text>
        {/* -------------------------------------------------- */}
        <View
          style={{
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            justifyContent: 'space-between',
          }}>
          <Text>Получать новости по вакцинации</Text>
          <Switch
            trackColor={{false: '#DBDBDB', true: '#DBDBDB'}}
            thumbColor={onComments ? '#EA4F3D' : '#676767'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleComments}
            value={onComments}
          />
        </View>
        {/* -------------------------------------------------- */}
        <View
          style={{
            marginTop: 5,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <Text>Получать статистику по заболевшим</Text>
          <Switch
            trackColor={{false: '#DBDBDB', true: '#DBDBDB'}}
            thumbColor={onStatus ? '#EA4F3D' : '#676767'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleStatus}
            value={onStatus}
          />
        </View>
        {/* --- End Switches --- */}
        <ShadowButton
          width="80%"
          text="СОХРАНИТЬ"
          Press={() => {
            console.log(onComments);
          }}
        />

        {/* ----------- START CHANGE PASSWORD ----------- */}
        <Text style={{marginHorizontal: 20, marginTop: 50, fontSize: 16}}>
          Сменить пароль от личного кабинета
        </Text>

        {/* -------------------------- */}
        <CustomInput
          value={OldPass}
          Title="Cтарый пароль"
          Placeholder="Введите старый пароль"
          setValueFocused={setOldPassFocused}
          ValueFocused={OldPassFocused}
          onChange={setOldPass}
        />
        {/* -------------------------- */}
        <CustomInput
          value={NewPass}
          Title="Новый пароль"
          Placeholder="Введите новый пароль"
          setValueFocused={setNewPassFocused}
          ValueFocused={NewPassFocused}
          onChange={setNewPass}
        />
        {/* -------------------------- */}
        <CustomInput
          value={NewPassTwo}
          Title="Повторите пароль"
          Placeholder="Повторите новый пароль"
          setValueFocused={setNewPassTwoFocused}
          ValueFocused={NewPassTwoFocused}
          onChange={setNewPassTwo}
        />
        {/* -------------------------- */}
        <View style={{marginVertical: 25}} />
        <ShadowButton width="80%" text="ПОМЕНЯТЬ ПАРОЛЬ" Press={SavePass} />
        <View style={{marginVertical: 25}} />

        {/* -----------  END  CHANGE PASSWORD ----------- */}
        {/* --- Start Exit --- */}
        <TouchableOpacity
          onPress={() => navigation.replace('Login')}
          style={styles.Exit}>
          <Image
            style={{width: 20, height: 20, marginRight: 10}}
            source={require('../../assets/logout.png')}
          />
          <Text>Выйти из аккаунта</Text>
        </TouchableOpacity>
        {/* --- End Exit --- */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
