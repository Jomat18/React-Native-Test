// import React, { useState, useEffect} from 'react';
// import { 
//   View, 
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   FlatList,
//   ActivityIndicator,
//   Button,  
// } from 'react-native';

// const url = "http://api.icndb.com/jokes/";

// const Jokes = () => {
//   // managing state with useState
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [type, setType] = useState([]);

//   // get data from URL:
//   const requestAPI = () => {
//     fetch(url) 
//     .then((response) => response.json()) //convert response to json
//     .then((json) => {
//       setData(json.value);
//       setType(json.type);
//     })
//     .catch((error) => alert(error)) 
//     .finally(setLoading(false)); // change loading state 
//   };
  
//   useEffect(() => {
//     requestAPI();
//   }, [requestAPI]);

//   return (
//     <SafeAreaView style={StyleSheet.container}>
//       {isLoading ? (
//       <ActivityIndicator />
//       ) : (
//       <View>
//         <Button style={styles.btn}
//           title="Update"
//           onPress={requestAPI}
//         />
//         <Text style={styles.title}>{type}</Text>
//         <View style={{ borderBottomWidth: 1, marginBottom: 12 }}></View>
//         <FlatList 
//           data={data} 
//           keyExtractor={({ id }, index ) => id}
//           renderItem={({ item }) => (
//           <View style={{ paddingBottom: 10 }}>
//             <Text style={styles.movieText}>
//               {item.id}. {item.joke}
//             </Text>
//           </View>    
//         )}
//       />
//       </View>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     marginTop: 48,
//   },
//   movieText: {
//     fontSize: 26,
//     fontWeight: "200",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//   },
//   description: {
//     textAlign: "center",
//     marginBottom: 18,
//     fontWeight: "200",
//     color: "green",
//   },
//   btn: {
//     width:10,
//     height:40,
//     backgroundColor:'#4BBD6E',
//     textAlign:'center',
//     borderRadius:10,
//     alignItems:'center',
//     justifyContent:'center',
//     marginTop:10
//   },
// });

// export default Jokes;
// /*

import React, { useState, useEffect} from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity, 
} from 'react-native';

const url = "http://api.icndb.com/jokes/";

export default class Jokes extends React.Component {  

  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: [],
      type: []
    }
  }

  componentDidMount(){
    //setTimeout( () => {
      this.requestAPI();
    //},1000);
  }

  requestAPI = () => {
    fetch(url) 
    .then((response) => response.json()) //convert response to json
    .then((json) => {
      this.setState({ data: json.value })                    
      this.setState({ type: json.type }) 
    })
    .catch((error) => alert(error)) 
    .finally(() => this.setState({ isLoading: false })); //change loading state 
  };

  render()  
  {  
    return (
      <SafeAreaView style={styles.container}>
        {this.state.isLoading ? (
          <View style={{ flex:1, padding: 20, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator animating size="large" />
          </View>
        ) : (
        <View>
          <TouchableOpacity style={styles.button} 
            onPress={() => {
              alert("Call API");
              this.requestAPI;
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Update </Text>
          </TouchableOpacity>  

          <Text style={styles.title}>{this.state.type}</Text>
          <View style={{ borderBottomWidth: 2, marginBottom: 12 }}></View>
          <FlatList 
            data={this.state.data} 
            keyExtractor={({ id } ) => id.toString()}
            renderItem={({ item, index }) => (
            <View style={{paddingBottom: 10}, [ index % 2 > 0 ? styles.itemOdd : styles.itemEven ]}>
              <Text style={styles.information}>
                {item.id}. {item.joke}
              </Text>
            </View>    
          )}
        />
        </View>
        )}
      </SafeAreaView>
    );
  }
};

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    //width: Dimensions.get('window').width,
    //flexDirection: 'row'
  },
  information: {
    fontSize: 16,  
    fontWeight: "200",
    padding: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderBottomWidth: 1.5,
  },
  itemEven: {
    backgroundColor: '#bdc3c7'
  },
  itemOdd: {
    backgroundColor: '#ecf0f1'
  },
  title: {
    marginTop: 35,
    fontSize: 32,
    fontWeight: "bold",
  },
  button: {
    height:40,
    width: width-width/3,
    backgroundColor:'#0099ff',
    textAlign:'center',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
  },
});