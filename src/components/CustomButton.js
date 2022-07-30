import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const CustomButton = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#1e1d1d',
        color: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
      }}
      onPress={onPress}>
      <FontAwesomeIcon icon={icon} size={20} color="gray" />
      <Text
        style={{color: '#fff', marginLeft: 10, fontSize: 15}}
        onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
