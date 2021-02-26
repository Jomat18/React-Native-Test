import React, { Component } from 'react';  
import { 
  View, 
  Text, 
  PermissionsAndroid, 
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import WifiManager from "react-native-wifi-reborn";
import ListView from "deprecated-react-native-listview";
  
class Wifi extends Component {  
  constructor(props) {  
    super(props);  

      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  
      this.state = {  
          dataSource: ds.cloneWithRows([])  
      };  
  }  

  async componentDidMount() {    

    try {
      const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, 
          {
              title: 'Location permission is required for WiFi connections',
              message: 'This app needs location permission as this is required to scan for wifi networks.',
              buttonNegative: 'DENY',
              buttonPositive: 'ALLOW',
          },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // You can now use react-native-wifi-reborn
          WifiManager.loadWifiList()
          .then((wifiList) => {
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(wifiList),
            })
          })
          .catch((error) => {
            console.error(error);
          });
          
      } else {
          // Permission denied
          console.log("Error")
      }
    } catch (error) {
        // Handle unexpected error
        console.log(error);
    }    

  }
    
  render() {  
    return (  
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Wifi Scanner </Text>
        <ListView  
          enableEmptySections
          ref="listView"
          style={styles.listView}
          dataSource={this.state.dataSource}  
          renderRow={(wifi) =>  
            <View style={styles.item}>
              <Text> Level: {wifi.level} </Text>
              <Text> Frequency: {wifi.frequency} </Text>
              <Text> SSID: {wifi.SSID} </Text>
              <Text> BSSID: {wifi.BSSID} </Text>
            </View>                      
          }  
        />  
      </SafeAreaView>  
    );  
  }  
}  
  
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  listView: {
    marginHorizontal: 20,
  },
  title: {
    marginTop: 20, 
    fontSize: 25, 
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    width: width/1.3,
    fontWeight: "bold",
    backgroundColor: '#d2f7f1',
    padding: 10,
    borderStyle: 'solid',
    borderColor: '#FE0082',
    borderBottomWidth: 1.5,
  },
});

export default Wifi;  