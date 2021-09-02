import React, {useEffect} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';

import IMAGE from '../assets/SVG';
import styles from '../styles';

const Splash = nav => {
  useEffect(() => {
    setTimeout(() => {
      // try {
      //   const value = await AsyncStorage.getItem('Token');
      //   if (value !== null) {
      //     dispatch(saveToken(value));
      nav.navigation.replace('Login');
      // console.log(nav);

      //     } else {
      //       dispatch(saveToken(value));
      //       nav.navigation.replace('Login');
      //     }
      //   } catch (e) {
      //     console.log(e);
      //   }
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar barStyle="default" backgroundColor="#FFF" />
      <View style={[styles.container, {backgroundColor: '#FFF'}]}>
        <Image source={require('../assets/logo.png')} />
      </View>
    </>
  );
};

export default Splash;
