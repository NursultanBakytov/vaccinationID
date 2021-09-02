import React, {Component, useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {WebView} from 'react-native-webview';

import {appAxios} from '../../api';
import HeaderComponent from '../../Components/HeaderComponent';
import {load} from '../../Components/Loader';
import styles from '../../styles';

const HomeComponent = props => {
  const {newsComponent} = useSelector(store => store.appReducer);
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#EA4F3D" />
      <ScrollView style={{flex: 1}}>
        <HeaderComponent
          arrow={true}
          title="Новости"
          navigation={props.navigation}
        />
        {Boolean(newsComponent) ? (
          <View style={[styles.ph20, {marginTop: 50, flex: 1}]}>
            {/* ---------------Modal start--------------- */}
            <Modal visible={visible} transparent={true}>
              <TouchableOpacity
                onPress={() => setVisible(false)}
                style={{
                  position: 'absolute',
                  zIndex: 2,
                  flex: 1,
                  width: Dimensions.get('window').width,
                  height: '100%',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                }}>
                <Image
                  style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 230,
                    borderRadius: 10,
                  }}
                  source={{uri: newsComponent.img}}
                />
              </TouchableOpacity>
            </Modal>
            {/* ---------------Modal end--------------- */}
            <TouchableOpacity onPress={() => setVisible(true)}>
              <Image
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  height: 230,
                  borderRadius: 10,
                }}
                source={{uri: newsComponent.img}}
              />
            </TouchableOpacity>
            {/* <WebView source={{html: '<h1>Hello world</h1>'}} /> */}
            <Text
              style={{
                marginTop: 20,
                color: 'black',
                lineHeight: 20,
              }}>
              {newsComponent.text}
            </Text>
          </View>
        ) : (
          load
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeComponent;
