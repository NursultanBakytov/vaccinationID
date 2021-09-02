import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';

const About = ({navigation}) => {
  return (
    <SafeAreaView>
      <HeaderComponent title="Помощь" navigation={navigation} />
    </SafeAreaView>
  );
};

export default About;
