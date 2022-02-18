import React from "react";
import { ScrollView, TouchableOpacity, Alert, Image } from "react-native";
import styled from "styled-components";
import Carousel from "../helpers/Carousel";
import Menu from "../helpers/Menu";
import { connect } from "react-redux";
import RedServerView from "./RedServerView";
import Chat from "../Components/Chat/Chat"
import NativeBalance from "../Components/Assets/NativeBalance";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class NodeView extends React.Component {
  static navigationOptions = {
    headerShown: false
  }; 

  render() {
    return (
        <Container>
          <Menu  />
          <TouchableOpacity
                title="settings"
                onPress={() => {this.props.navigation.push("Profile") }}
              >
                <Wallet>
                  <Icon>
                    <FontAwesomeIcon 
                      icon={faUser} 
                      color="#5C26FF" 
                      size={32}
                      margintop={16}
                    />
                  </Icon>
                </Wallet>
              </TouchableOpacity>
            <Section>Active Servers</Section>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              
              <TouchableOpacity
                onPress={() => {
                  if (1>0) {
                  this.props.navigation.push("RedServer");
                  console.log(1);
                  }
                  else{
                    console.log(0);
                  }
                }}
              >
                <Carousel 
                  title="AVAX Hub"
                  image={require('../Avalanche.png')}
                />
                <NativeBalance chain="0xa86a"/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (1>0) {
                  this.props.navigation.push("BlueServer");
                  console.log(1);
                  }
                  else{
                    <Alert>
                      <Text>this is an Alert</Text>
                    </Alert>
                  }
                }}
              >
                <Carousel 
                  title="BSC Hub"
                  image={require('../bsc.png')}
                />
                <NativeBalance chain="0x38"/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (1>0) {
                  this.props.navigation.push("BlueServer");
                  console.log(1);
                  }
                  else{
                    <Alert>
                      <Text>this is an Alert</Text>
                    </Alert>
                  }
                }}
              >
                <Carousel 
                  title="Eth Hub"
                  image={require('../eth.png')}
                />
                <NativeBalance chain="0x1"/>
              </TouchableOpacity>
            </ScrollView>
        </Container>
    );
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(NodeView);

const Container = styled.View`
  background: #f2f2f2;
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  position: absolute;
  flex: 1;
`;

const Settings = styled.View`
  background: #EEEEEE;
  margin-top: 16px;
  flex: 1;
`;

const Wallet = styled.View`
  background: #FFFFFF;
  border-radius: 16px;
  height: 64px;
  position: absolute;
  right: 16px;
  width: 64px;
`;

const Icon = styled.View`
  background: #ffffff;
  border-radius: 16px;
  height: 32px;
  position: absolute;
  right: 16px;
  width: 32px;
  top: 16px
`;

const Section = styled.Text`
  color: #5C26FF;
  font-size: 22px;
  font-weight: 700;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 96px;
  text-transform: uppercase;
`;
