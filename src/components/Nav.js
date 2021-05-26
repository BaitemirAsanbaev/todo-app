import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const Nav = () => {
  return <View style={styles.nav}>
    <Text style={styles.logo}>Todo list</Text>
  </View>
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    backgroundColor: '#060016',
    paddingTop: 60,
    paddingBottom: 20,
    justifyContent: 'center'
  },
  logo: {
    color: '#fff',
    fontSize: 25
  }
})