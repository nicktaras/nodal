import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import useERC20Balance from "../../hooks/useERC20balance";
import {
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  Modal,
  Pressable,
} from "react-native";
import NativeBalance from "./NativeBalance";
import ERC20Balance from "./ERC20Balance";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { Card, withStyles } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import ChatModal from "../Chat/ChatModal";
import { FlexStyleProps } from "@ui-kitten/components/devsupport";

export default function Assets() {
  const { Moralis } = useMoralis();
  // const nativeName = useMemo(() => getNativeByChain(options?.chain || chainId), [options, chainId]);
  return (
    <SafeAreaView style={[StyleSheet.absoluteFill, styles.container]}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <Text style={styles.headerText} category="h4">
            Assets
          </Text>
        <NativeBalance chain="0xa869"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white",
  },
  chainText: {
    fontSize: 15,
    color: "#414a4c",
    paddingTop: 20,
    paddingHorizontal: 5,
    fontWeight: "600",
  },
  headerText: {
    color: "black",
    fontWeight: "600",
    fontSize: 35,
  },
  viewContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flex: 10,
  },
});