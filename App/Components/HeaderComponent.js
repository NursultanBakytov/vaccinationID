import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import IMAGE from '../assets/SVG';
import styles from '../styles';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.HeaderComponentBlock}>
        {this.props.arrow && (
          <TouchableOpacity
            style={{marginRight: 15}}
            onPress={() => this.props.navigation.goBack()}>
            {IMAGE.ArrowLeft}
          </TouchableOpacity>
        )}
        <Text style={{color: 'white', fontSize: 16}}>{this.props.title}</Text>
      </View>
    );
  }
}
