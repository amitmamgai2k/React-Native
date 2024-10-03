import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, Alert, RefreshControl } from 'react-native';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState('old data');
  
  const name = "Amit";
  const age = 28;
  const greetings = `Hello, ${name}`;
  
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  const handlePress = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to delete this item?",
      [
        {
          text: "Cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            console.log("Deletion confirmed");
          },
        },
      ]
    );
    console.log('Button Pressed');
  };

  const getAge = () => age;

  return (
    <>
      {/* Display greetings and age */}
      <View style={styles.container}>
        <Text>{greetings}</Text>
        <Text>Your age is: {getAge()}</Text>

        {/* Button with a press handler */}
        <View style={styles.row}>
          <Button color="red" title="Press me" onPress={handlePress}></Button>
          <View style={styles.box} />
          <View style={styles.box} />
        </View>

        {/* Additional boxes */}
        <View style={styles.row}>
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </View>

      <SafeAreaView>
        <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
          {/* List of items */}
          <Text style={styles.text}>ITEM 1</Text>
          <Text style={styles.text}>ITEM 2</Text>
          <Text style={styles.text}>ITEM 3</Text>
          <Text style={styles.text}>ITEM 4</Text>
          <Text style={styles.text}>ITEM 5</Text>
          <Text style={styles.text}>ITEM 6</Text>
          <Text style={styles.text}>ITEM 7</Text>
          <Text style={styles.text}>ITEM 8</Text>
          <Text style={styles.text}>ITEM 9</Text>
          <Text style={styles.text}>ITEM 10</Text>
          <Text style={styles.text}>ITEM 11</Text>
          <Text style={styles.text}>ITEM 12</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    margin: 5,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingLeft: 20,
  }
});
//sss