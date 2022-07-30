import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  Alert,
  TouchableOpacity,
  TextInput,
  Image,
  ToastAndroid,
} from 'react-native';
import Verified from '../images/verified.png';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import PaymentButton from './PaymentButton';

const CustomModal = ({show, setShow, users, setUsers, isPositive = false}) => {
  const [UPI, setUPI] = useState('');
  const [finished, setFinished] = useState(false);
  if (users.find(user => user.name === 'Me').amount === 0) {
    return (
      <Modal
        animationType="slide"
        visible={show}
        transparent
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setShow(!show);
        }}>
        <View style={styles.container}>
          <View style={styles.headContainer}>
            <Text style={styles.heading}>Are you sure?</Text>
            <TouchableOpacity
              onPress={() => {
                setShow(false);
              }}>
              <FontAwesomeIcon icon={faCircleXmark} color="#fff" size={25} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <PaymentButton
              onPress={() => {
                setFinished(false);
                setShow(false);
              }}
              title="Go Back"
              color="#168f70"
            />
            <PaymentButton
              onPress={() => {
                setFinished(false);
                //Delete user from DB
                const indexOfObject = users.findIndex(user => {
                  return user.name === 'Me';
                });
                users.splice(indexOfObject, 1);
                setUsers(users);
                setShow(false);
                ToastAndroid.show('Exited the Group!', ToastAndroid.SHORT);
              }}
              title="Leave Group"
              color="#ef61a6"
            />
          </View>
        </View>
      </Modal>
    );
  } else {
    return (
      <Modal
        animationType="slide"
        visible={show}
        transparent
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setShow(!show);
        }}>
        {finished ? (
          <View style={styles.container}>
            <View style={styles.headContainer}>
              {isPositive ? (
                <Text style={styles.heading}>Withdraw your money</Text>
              ) : (
                <Text style={styles.heading}>Settle Payments</Text>
              )}
              <TouchableOpacity
                onPress={() => {
                  setShow(false);
                }}>
                <FontAwesomeIcon icon={faCircleXmark} color="#fff" size={25} />
              </TouchableOpacity>
            </View>
            <View style={styles.amountWrapper}>
              <View style={styles.amountContainerPaid}>
                <Image source={Verified} style={{}} />
                <Text style={styles.amount}>₹200</Text>
                <Text style={styles.desc}>
                  {isPositive ? 'Added to your Account' : 'Payment Settled'}
                </Text>
              </View>
            </View>
            <View style={styles.paymentGroup}>
              <PaymentButton
                onPress={() => {
                  setFinished(false);
                  //Update user balance to 0
                  const updated = users.map(element =>
                    element.name === 'Me' ? {...element, amount: 0} : element,
                  );
                  setUsers(updated);
                  setShow(false);
                }}
                title="Go Back"
                color="#168f70"
              />
              <PaymentButton
                onPress={() => {
                  setFinished(false);
                  //Update balance to 0
                  //Delete user from DB
                  const updated = users.map(element =>
                    element.name === 'Me' ? {...element, amount: 0} : element,
                  );
                  setUsers(updated);
                  const indexOfObject = users.findIndex(user => {
                    return user.name === 'Me';
                  });
                  users.splice(indexOfObject, 1);
                  setUsers(users);
                  setShow(false);
                  ToastAndroid.show('Exited the Group!', ToastAndroid.SHORT);
                }}
                title="Leave Group"
                color="#ef61a6"
              />
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.headContainer}>
              {isPositive ? (
                <Text style={styles.heading}>Withdraw your money</Text>
              ) : (
                <Text style={styles.heading}>Settle Payments</Text>
              )}
              <TouchableOpacity
                onPress={() => {
                  setShow(false);
                }}>
                <FontAwesomeIcon icon={faCircleXmark} color="#fff" size={25} />
              </TouchableOpacity>
            </View>
            <View style={styles.amountWrapper}>
              <View style={styles.amountContainer}>
                <Text style={styles.amount}>₹200</Text>
                <Text style={styles.desc}>
                  {isPositive ? 'your amount in group' : 'Needs to be Added'}
                </Text>
              </View>
            </View>
            <View>
              {isPositive ? (
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.desc}>Enter your UPI ID</Text>
                  <TextInput
                    placeholder="e.g. 98XXXXXX12@ybl"
                    value={UPI}
                    onChangeText={setUPI}
                    style={styles.input}
                  />
                  <PaymentButton
                    onPress={() => {
                      setFinished(true);
                    }}
                    title="Get Money"
                    color="#168f70"
                    disabled={UPI === ''}
                  />
                </View>
              ) : (
                <View>
                  <PaymentButton
                    onPress={() => {
                      setFinished(true);
                    }}
                    title="Add Money"
                    color="#168f70"
                  />
                </View>
              )}
            </View>
          </View>
        )}
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: '#303030',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 25,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'semi-bold',
    color: '#fff',
  },
  amountWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  amountContainer: {
    backgroundColor: 'gray',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  amountContainerPaid: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  amount: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
  },
  desc: {
    color: '#fff',
    fontSize: 18,
  },
  input: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    color: '#fff',
    fontSize: 18,
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  paymentGroup: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default CustomModal;
