import React, { useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet, Image } from "react-native";
import yelp from "../api/yelp";

const ResultDetailsScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam("id");

  const renderItem = ({ item }) => (
    <Image style={styles.image} source={{uri: item}}/>
  );

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data)
  };

  useEffect(() => {
    getResult(id)
  }, []) 

  if(!result) {
    return null
  }


  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
      data={result.photos}
      keyExtractor={(photo) => photo}
      renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 15,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    image: {
        width: 270,
        height: 180,
        marginBottom: 15,
        borderRadius: 10,
    }
});

export default ResultDetailsScreen;
