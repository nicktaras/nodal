import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { View, Text, StyleSheet, Button } from "react-native";
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";
import { n4 } from "../../utils/formatters";
import useNativeBalance from "../../hooks/useNativeBalance";

import { getNativeByChain } from "../../utils/getNativeByChain";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import styled from "styled-components";

function NativeBalance(props) {
  const { account } = useMoralisWeb3Api();
  const { Moralis } = useMoralis();
  const { walletAddress, chainId: chain } = useMoralisDapp();
  const [nativeChainString, setNativeChainString] = useState();

  const { nativeBalance } = useNativeBalance(props?.chain || chainId);

  return (
    <View style={styles.itemView}>
      <Text style={styles.name}>Server Asset: {nativeBalance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemView: {
    backgroundColor: "white",
    width: 315,
    marginLeft: 16,
    marginTop: 16,
    borderRadius: 269,
    height: 69,
    flex: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    color: "#5C26FF",
    fontWeight: "500",
    textTransform: "uppercase",
  },
});


export default NativeBalance;
