import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    containerRoot: {  
      justifyContent: 'center',  
      flex: 1,  
      position: 'absolute',  
      width: '100%',  
      height: '100%',  
      },  
   
    containerChild: {  
      justifyContent: 'center',  
      alignItems: 'center',  
      flex:1,  
    },
    
    input:{
      height: 40,
      width: width-width/3,
      borderRadius: 8,
      //borderColor: '#1b5082',
      backgroundColor: 'white',
      padding: 10,
      margin: 10,          
      fontSize: 14,
      borderBottomColor: '#FE0082',
      borderBottomWidth: 2
    },
  
    text: {  
      fontSize: 30,
      color: 'black',      
      textAlign: 'center',
      fontSize: 25,
    },
  
    button: {
      width: 200,
      height: 40,
      backgroundColor: '#0099ff',
      textAlign:'center',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    }
})  

export default styles;