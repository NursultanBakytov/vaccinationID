import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import styles from '../styles';

export default class ShadowButton extends Component {
  render() {
    return (
      <Card
        style={[styles.AllButtonContainer, {width: this.props.width || '90%'}]}>
        <TouchableOpacity
          style={styles.AllButtonButton}
          onPress={this.props.Press}>
          <Text style={styles.AllButtonText}>{this.props.text}</Text>
        </TouchableOpacity>
      </Card>
    );
  }
}
