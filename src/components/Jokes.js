import React from 'react';
import {
  SafeAreaView,
  View, 
  Text, 
  StyleSheet, 
} from 'react-native'

const Jokes = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          Jokes Screen
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
});

export default Jokes;