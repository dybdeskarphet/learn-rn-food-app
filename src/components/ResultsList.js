import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ResultsListItem from "./ResultsListItem";

const ResultsList = ({ title, results }) => {

  if(!results.length) {
    return null
  }

  const renderItem = ({ item }) => (
    <ResultsListItem
      id={item.id}
      name={item.name}
      imageUrl={item.image_url}
      reviewCount={item.review_count}
      rating={item.rating}
    />
  );

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 12 }}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginLeft: 12,
    fontWeight: "bold",
    marginBottom: 6,
  },
});

export default ResultsList;
