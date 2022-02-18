import React, {useState} from "react";
import {
  StyleSheet,
  TextInput,
  StatusBar,
  View,
  Button,
} from "react-native";
import {
  useMoralis,
} from "react-moralis";

const Profile = ({ navigation }) => {
  const {
    authenticate,
    isAuthenticated,
    logout,
    Moralis,
  } = useMoralis();

  const updateUsername = Moralis.User.extend();
  const Monster = Moralis.Object.extend("UserTyping");
  const user = new updateUsername();
  const [handle, setMessage] = useState();
  const setBio = async () => {
    Moralis.User.currentAsync().then(function(user) {
      Moralis.User.enableUnsafeCurrentUser();
      //user.unset("userHandle");
      //user.save();
      //setUserAttributes(user.attributes);
      user.save().then((user) => {
        user.set("userHandle", this.handle);
        return user.save();
      });
    });
  }

  const logoutUser = () => {
    if (isAuthenticated) {
      logout();
      navigation.replace("Auth");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
      <TextInput
        onChangeText={(text) => this.handle = text}
        placeholder="New Username"
        color="#000000"
        textAlign="center"
        disabledStyle={{
          borderWidth: 2,
          borderColor: "#00F",
        }}
        />
      </View>
      <View style={styles.buttonFormat}>
        <Button
          title="Update Chat Handle"
          color="white"
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F",
          }}
          onPress={setBio}
          loadingProps={{ animating: true }}></Button>
      </View>
      <View style={styles.logoutFormat}>
        <Button
          title="Log Out"
          color="white"
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F",
          }}
          onPress={logoutUser}
          loadingProps={{ animating: true }}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white",
  },
  buttonFormat: {
    alignItems: "center",
    backgroundColor: "#5C26FF",
    justifyContent: "center",
    width: 200,
    opacity: 0.95,
    borderRadius: 16,
    marginBottom: 8,
    marginLeft: 64,
    marginRight: 64,
    height: 64,
  },
  logoutFormat: {
    alignItems: "center",
    backgroundColor: "#f23d3d",
    justifyContent: "center",
    width: 200,
    opacity: 0.95,
    borderRadius: 16,
    marginBottom: 8,
    marginLeft: 64,
    marginRight: 64,
    height: 64,
  },
  form: {
    width: 200,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#EEEEEE",
    borderRadius: 16,
    marginBottom: 10,
    height: 32,
  },
});

export default Profile;
