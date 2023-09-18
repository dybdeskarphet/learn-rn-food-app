import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? (
        <Text style={styles.foundMessage}>{errorMessage}</Text>
      ) : null}

      <View style={{ margin: 2 }} />

      <ScrollView style={styles.lists}>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cheaper"
        />
        <View style={{ margin: 5 }} />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Pricier"
        />
        <View style={{ margin: 5 }} />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Expensive"
        />
        <View style={{ margin: 10 }} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  lists: {
    borderRadius: 10,
  },
  foundMessage: {
    marginTop: 5,
    marginLeft: 12,
  },
});

export default SearchScreen;
