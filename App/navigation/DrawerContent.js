import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Card} from 'react-native-shadow-cards';

import IMAGE from '../assets/SVG';
import styles from '../styles';
const DrawerContent = props => {
  // ************************************************************************

  return (
    <DrawerContentScrollView
      showsVerticalScrollIndicator={false}
      {...props}
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 40,
        paddingTop: 75,
      }}>
      <View>{IMAGE.LogoIcon}</View>

      {/* Start Screens */}
      <TouchableOpacity style={[styles.BurgerText, {marginTop: 74}]}>
        <Text>Автосалоны</Text>
      </TouchableOpacity>
      {/* ----------- */}
      <TouchableOpacity style={styles.BurgerText}>
        <Text>Авто в России</Text>
      </TouchableOpacity>
      {/* ----------- */}
      <TouchableOpacity style={styles.BurgerText}>
        <Text>Авто в Казахстане</Text>
      </TouchableOpacity>
      {/* ----------- */}
      <TouchableOpacity style={styles.BurgerText}>
        <Text>Проверка авто (Carchek)</Text>
      </TouchableOpacity>
      {/* ----------- */}
      <TouchableOpacity style={styles.BurgerText}>
        <Text>Проверка штрафов</Text>
      </TouchableOpacity>
      {/* ----------- */}
      <TouchableOpacity style={styles.BurgerText}>
        <Text>Таможенный калькулятор</Text>
      </TouchableOpacity>
      {/* End Screens */}

      <View style={styles.BurgerLine} />

      <TouchableOpacity style={{flexDirection: 'row'}}>
        {IMAGE.AddIcon}
        <Text style={{marginLeft: 15}}>Добавить объявление</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection: 'row', marginTop: 18}}>
        {IMAGE.BurgerParams}
        <Text style={{marginLeft: 15}}>Добавить объявление</Text>
      </TouchableOpacity>

      {/* Start Social Network */}
      <View style={styles.socialIconsBlock}>
        {/* --- Whats App --- */}
        <Card style={styles.SocialShadow}>
          <TouchableOpacity style={styles.socialIconsStyle}>
            {IMAGE.WhatsappIcon}
          </TouchableOpacity>
        </Card>
        {/* --- Instagram --- */}
        <Card style={styles.SocialShadow}>
          <TouchableOpacity style={styles.socialIconsStyle}>
            {IMAGE.InstagramIcon}
          </TouchableOpacity>
        </Card>
        {/* --- YouTube --- */}
        <Card style={styles.SocialShadow}>
          <TouchableOpacity style={styles.socialIconsStyle}>
            {IMAGE.YouTubeIcon}
          </TouchableOpacity>
        </Card>
        {/* --- Facebook --- */}
        <Card style={styles.SocialShadow}>
          <TouchableOpacity style={styles.socialIconsStyle}>
            {IMAGE.FacebookIcon}
          </TouchableOpacity>
        </Card>
      </View>
      {/* End Social Network */}
    </DrawerContentScrollView>
  );
};
export default DrawerContent;

{
  //   const shadowOpt = {
  //     width:160,
  //     height:170,
  //     color:"#000",
  //     border:2,
  //     radius:3,
  //     opacity:0.2,
  //     x:0,
  //     y:3,
  //     style:{marginVertical:5}
  // }
  /* <Card>
<TouchableHighlight style={{
    position:"relative",
    width: 160,
    height: 170,
    backgroundColor: "#fff",
    borderRadius:3,
    // marginVertical:5,
    overflow:"hidden"}}>
    …………………………
</TouchableHighlight>
</Card> */
}
