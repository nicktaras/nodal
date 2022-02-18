import React from "react";
import { View, StyleSheet, TouchableOpacity, Button } from "react-native";

import Address from "./Address";

export default function Header() {
  return (
    <View style={styles.viewContainer}>
      <Address />
    </View>

    
  );
}
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  
});
const Format = StyleSheet.create({
  buttonFormat: {
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    height: 32,
    width: 32,
    marginBottom: 130,
    marginLeft: 8,
    marginRight: 8,
  },
});
