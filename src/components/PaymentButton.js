import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const PaymentButton = ({title, onPress, color, disabled = false}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: `${disabled ? 'gray' : color}`,
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 30,
        flexDirection: 'row',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      disabled={disabled}
      onPress={onPress}>
      <Text style={{color: '#fff', fontSize: 18, fontWeight: 'semi-bold'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PaymentButton;
