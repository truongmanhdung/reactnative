import React from 'react';
import { Text, View, TextInput, ScrollView, Image } from 'react-native';
import { Platform, StyleSheet,SafeAreaView } from 'react-native';
import {Button, Icon, InputItem, TabBar} from "@ant-design/react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
  }
});
const App = () => {
  return (

      <View>
        <TabBar styles={styles.container}
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="#f5f5f5"
        >
          <TabBar.Item
              icon={<Icon name="ordered-list" />}
              title="Home"
          >
          </TabBar.Item>
          <TabBar.Item
              icon={<Icon name="ordered-list" />}
              title="Login"
          >
          </TabBar.Item>
          <TabBar.Item
              icon={<Icon name="like" />}
              title="Friend"
          >
          </TabBar.Item>
          <TabBar.Item
              icon={<Icon name="user" />}
              title="My App"
          >
          </TabBar.Item>
        </TabBar>
        <Text style={{marginTop: 100, textAlign: "center",fontSize: 30}}>Login</Text>
      <SafeAreaView>
        <InputItem style={{marginTop: 20}}
            placeholder="User Name"
                   type="name"
        />
        <InputItem style={{marginTop: 20}}
            placeholder="Email"
                   type="email"
        />
        <InputItem
            style={{marginTop: 20}}
            type="password"
            placeholder="Password"
        />
        <Button type="submit" style={{marginTop: 20}} type={"primary"}>Login</Button>
      </SafeAreaView>
      </View>
  );
};

export default App;
