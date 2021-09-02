import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from '../../styles';
import IMAGE from '../../assets/SVG';
import Icon from './NotiffIcon';
export default class NotiffComponent extends Component {
  render() {
    return (
      <TouchableOpacity style={{marginTop: 37}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.fdRow}>
            <Image
              style={{width: 20, height: 20}}
              source={Icon[this.props.type].icon}
            />

            <Text style={{marginLeft: 15, maxWidth: '90%'}}>
              {this.props.title}
            </Text>
          </View>
          {IMAGE.ArrowRight}
        </View>
        <View style={{flexDirection: 'row', marginLeft: 31, marginTop: 2}}>
          <Text style={{fontSize: 12, color: '#818181'}}>
            {this.props.date}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
