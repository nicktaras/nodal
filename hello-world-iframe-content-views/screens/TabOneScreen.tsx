import { StyleSheet, Button, Pressable, Alert } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

// TODO - load Apes image + buttons
// Navigate to views using Iframe data

const community = {
  collection: "Apes Yacht Club",
  contract: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
};

const views = [
  {
      contractAddress: "0xfdgfsdgf",
      extensionName: "Apes-Chat",
      endpoint: "http://localhost:3005/"
  },
  {
      contractAddress: "0xfdgfsdgf",
      extensionName: "Apes-news",
      endpoint: "http://localhost:3001/"
  },
  {
      contractAddress: "0xfdgfsdgf",
      extensionName: "Apes-Bar",
      endpoint: "http://localhost:3000/"
  },
];

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  function loadView(endpoint:string) {
    navigation.navigate('TabTwo', { endpoint });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{community.collection}</Text>
      <Text style={styles.smallText}>{community.contract}</Text>
      {
        views.map((view, i) => {
          return <Pressable key={i}
          style={styles.button}
          onPress={() => {loadView(view.endpoint)}}
          accessibilityLabel="Learn more about this purple button"
        >
          <Text style={styles.text}>{view.extensionName}</Text>
        </Pressable>
        })
      }
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginLeft :50,
    marginRight:50,
    marginTop :20
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  smallText: {
    fontSize: 11,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  }
});
