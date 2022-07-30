import React from 'react';
import {View, StyleSheet} from 'react-native';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <View style={styles.container}>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
});

export default Home;
