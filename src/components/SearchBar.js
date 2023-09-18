import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#E0E0E0",
    height: 50,
    borderRadius: 20,
    marginTop: 15,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
  inputStyle: {
    marginLeft: 10,
    flex: 1,
    fontSize: 17,
  },
  iconStyle: {
    fontSize: 28,
    alignSelf: "center",
  },
});

export default SearchBar;
