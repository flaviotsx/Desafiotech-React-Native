import React from "react";
import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ranking</Text>

      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" }
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
      <View style={styles.button}>
        <Text style={styles.textButton}>Entrar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  // input: {
  //   backgroundColor: "#d6d7da",
  //   borderRadius: 4,
  //   borderWidth: 0.5,
  //   borderColor: "#429",
  //   height: 40,
  //   marginHorizontal: 50,
  //   marginVertical: 10,
  //   paddingHorizontal: 20,
  //   alignSelf: "stretch"
  // },
  button: {
    backgroundColor: "#429",
    borderRadius: 4,
    height: 40,
    alignSelf: "stretch",
    marginHorizontal: 50,
    marginTop: 20
  },
  textButton: {
    color: "rgba(248,231,28,1)",
    fontSize: 26,
    textAlign: "center"
  }
});
