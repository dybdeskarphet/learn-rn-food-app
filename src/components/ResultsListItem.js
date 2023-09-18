import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

const ResultsListItem = ({
  navigation,
  imageUrl,
  id,
  name,
  rating,
  reviewCount,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ResultDetails", { id: id });
      }}
      style={styles.mainContainer}
    >
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>
        {rating} stars, {reviewCount} reviews
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    marginRight: 13,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 10,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    color: "black",
  },
  desc: {
    color: "grey",
  },
});

export default withNavigation(ResultsListItem);
