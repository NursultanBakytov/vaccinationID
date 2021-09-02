import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from '../../styles';
import IMAGE from '../../assets/SVG';
import {appAxios} from '../../api';
import {SetNews, SetNewsComponent} from '../../Store/action';
import HeaderComponent from '../../Components/HeaderComponent';
import {load} from '../../Components/Loader';

const HomePage = ({navigation}) => {
  const dispatch = useDispatch();
  const {news} = useSelector(store => store.appReducer);
  useEffect(() => {
    appAxios
      .post(`news.php`)
      .then(({data, ...res}) => {
        dispatch(SetNews(data.news));
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  return (
    // <>
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#EA4F3D" />
      <HeaderComponent title="Главная" navigation={navigation} />

      {/* Start Header */}
      <ScrollView>
        {Boolean(news)
          ? news.map((item, key) => {
              return (
                <View style={styles.mh20} key={key}>
                  <TouchableOpacity
                    key={key}
                    onPress={() => {
                      dispatch(SetNewsComponent(item));
                      navigation.navigate('HomeComponent');
                    }}>
                    <Image
                      style={{
                        marginVertical: 10,
                        width: '100%',
                        alignSelf: 'center',
                        height: 230,
                        borderRadius: 10,
                      }}
                      source={{uri: item.img}}
                    />

                    <Text
                      style={{
                        width: '70%',
                        fontWeight: '700',
                        fontSize: 16,
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })
          : load}
      </ScrollView>
      {/* End Header */}
    </SafeAreaView>
    // </>
  );
};

export default HomePage;
