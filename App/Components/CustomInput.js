import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';

import styles from '../styles';

const CustomInput = ({
  value,
  onChange,
  ValueFocused,
  setValueFocused,
  Title,
  Placeholder,
  security,
}) => {
  return (
    <View style={[styles.LoginInputBlock]}>
      {Boolean(ValueFocused) && (
        <Text style={{color: '#9C9C9C', fontSize: 10}}>{Title}</Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextInput
          onFocus={() => {
            setValueFocused(!ValueFocused);
          }}
          onBlur={() => {
            setValueFocused(!ValueFocused);
          }}
          value={value}
          onChangeText={onChange}
          placeholder={Placeholder}
          secureTextEntry={security ? true : false}
          placeholderTextColor="#9C9C9C"
          style={{
            marginBottom: ValueFocused ? 10 : -20,
            color: 'black',
            paddingLeft: -5,
            width: '95%',
          }}
        />
      </View>
    </View>
  );
};

export default CustomInput;
