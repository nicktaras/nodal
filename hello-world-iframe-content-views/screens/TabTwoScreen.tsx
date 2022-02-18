import { StyleSheet, Alert } from 'react-native';

import { WebView } from 'react-native-webview'; 

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen(props:any) {
  
  console.log('hi');
  console.log(props?.route?.params?.endpoint);

  const msg = props?.route?.params?.endpoint;

  return (
    <View style={styles.container}>
      {/* {
        Alert.alert(
          "Alert Title",
          msg,
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        )
      }
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      <WebView
          source={{uri: msg}}
          style={styles.video}
        />
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
  video: {
    marginTop: 20,
    maxHeight: 700,
    width: 380,
    flex: 1
  }
});

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <WebView
//         source={{uri: 'https://www.youtube.com/embed/MhkGQAoc7bc'}}
//         style={styles.video}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   alignItems: 'center',
//   justifyContent: 'space-between',

// },
// video: {
//   marginTop: 20,
//   maxHeight: 200,
//   width: 320,
//   flex: 1
// }
// });
