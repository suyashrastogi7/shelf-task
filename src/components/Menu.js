import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from './CustomButton';
import Modal from './Modal';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChartColumn,
  faPiggyBank,
  faRefresh,
  faUserAstronaut,
  faUserDoctor,
  faUserGraduate,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const [users, setUsers] = useState([
    {
      name: 'Me',
      amount: 200,
      image: faUserAstronaut,
      color: '#eb77ae',
    },
    {name: 'Richa', amount: 500, image: faUserDoctor, color: '#4dc1bf'},
    {
      name: 'Paras',
      amount: -100,
      image: faUserGraduate,
      color: '#8459e8',
    },
    {name: 'Vaibhav', amount: 250, image: faUserCog, color: '#fbd109'},
  ]);

  const [show, setShow] = useState(false);
  if (!users.find(user => user.name === 'Me')) {
    return (
      <View style={styles.menuContainer}>
        <View style={styles.listItem}>
          <Text style={styles.name}>Amount Remaining</Text>
          <Text style={styles.name}>
            ₹
            {users
              .map(user => user.amount)
              .reduce((prev, next) => {
                return prev + next;
              })}
          </Text>
        </View>
        <View style={styles.buttonGroup}>
          <Button
            icon={faChartColumn}
            title="View Transactions"
            onPress={() => {}}
          />
          <Button icon={faRefresh} title="Spend Share" onPress={() => {}} />
        </View>
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            backgroundColor: '#1e1d1d',
            paddingLeft: 15,
            paddingVertical: 10,
          }}>
          Members
        </Text>
        {users.map((user, i) => {
          return (
            <View style={styles.listItem} key={i}>
              <View style={styles.user}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 999,
                    padding: 5,
                    marginLeft: 10,
                  }}>
                  <FontAwesomeIcon
                    icon={user.image}
                    size={25}
                    color={user.color}
                    style={{}}
                  />
                </View>
                <Text style={styles.name}>{user.name}</Text>
              </View>
              <View style={styles.balance}>
                <Text style={styles.balanceText}>Balance : </Text>
                <Text style={styles.balanceAmount}>{user.amount}</Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  } else {
    const x = users.find(user => user.name === 'Me').amount > 0;
    return (
      <View style={styles.menuContainer}>
        <View style={styles.listItem}>
          <Text style={styles.name}>Amount Remaining</Text>
          <Text style={styles.name}>
            ₹
            {users
              .map(user => user.amount)
              .reduce((prev, next) => {
                return prev + next;
              })}
          </Text>
        </View>
        <View style={styles.buttonGroup}>
          <Button
            icon={faChartColumn}
            title="View Transactions"
            onPress={() => {}}
          />
          <Button icon={faRefresh} title="Spend Share" onPress={() => {}} />
          <Button
            icon={faPiggyBank}
            title="Exit Pool"
            onPress={() => {
              setShow(true);
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            backgroundColor: '#1e1d1d',
            paddingLeft: 15,
            paddingVertical: 10,
          }}>
          Members
        </Text>
        {users.map((user, i) => {
          return (
            <View style={styles.listItem} key={i}>
              <View style={styles.user}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 999,
                    padding: 5,
                    marginLeft: 10,
                  }}>
                  <FontAwesomeIcon
                    icon={user.image}
                    size={25}
                    color={user.color}
                    style={{}}
                  />
                </View>
                <Text style={styles.name}>{user.name}</Text>
              </View>
              <View style={styles.balance}>
                <Text style={styles.balanceText}>Balance : </Text>
                <Text style={styles.balanceAmount}>{user.amount}</Text>
              </View>
            </View>
          );
        })}
        <Modal
          show={show}
          setShow={setShow}
          users={users}
          setUsers={setUsers}
          isPositive={x}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  listContainer: {},
  listItem: {
    backgroundColor: '#1e1d1d',
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  user: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  balance: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  balanceText: {
    marginRight: 5,
    color: 'white',
    opacity: 0.8,
    fontSize: 15,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'semi-bold',
  },
  image: {
    height: 10,
    width: 10,
    marginRight: 0,
    textAlign: 'center',
  },
  name: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  buttonGroup: {
    backgroundColor: '#1e1d1d',
  },
});

export default Menu;
