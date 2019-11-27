import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Ranking_1(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.ranking}>Ranking</Text>
      <View style={styles.group1}>
        <View style={styles.rect}>
          <View style={styles.devinRow}>
            <Text style={styles.devin}>Devin</Text>
            <Text style={styles.devin2}>4.9</Text>
          </View>
        </View>
      </View>
      <View style={styles.group7}>
        <View style={styles.rect}>
          <View style={styles.danRow}>
            <Text style={styles.dan}>Dan</Text>
            <Text style={styles.devin8}>4.8</Text>
          </View>
        </View>
      </View>
      <View style={styles.group3}>
        <View style={styles.rect}>
          <View style={styles.dominicRow}>
            <Text style={styles.dominic}>Dominic</Text>
            <Text style={styles.devin4}>4.5</Text>
          </View>
        </View>
      </View>
      <View style={styles.group4}>
        <View style={styles.rect}>
          <View style={styles.jacksonRow}>
            <Text style={styles.jackson}>Jackson</Text>
            <Text style={styles.devin5}>4.4</Text>
          </View>
        </View>
      </View>
      <View style={styles.group5}>
        <View style={styles.rect}>
          <View style={styles.jamesRow}>
            <Text style={styles.james}>James</Text>
            <Text style={styles.devin6}>4.1</Text>
          </View>
        </View>
      </View>
      <View style={styles.group6}>
        <View style={styles.rect}>
          <View style={styles.joelRow}>
            <Text style={styles.joel}>Joel</Text>
            <Text style={styles.devin7}>3.7</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ranking: {
    color: "rgba(53,53,53,1)",
    fontSize: 28,
    marginTop: 91,
    alignSelf: "center"
  },
  group1: {
    width: 244,
    height: 50,
    marginTop: 35,
    marginLeft: 66
  },
  rect: {
    width: 244,
    height: 50,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 4,
    borderColor: "#502a95",
    borderWidth: 2,
    flexDirection: "row"
  },
  devin: {
    color: "#f8e84d",
    fontSize: 18
  },
  devin2: {
    color: "#f8e84d",
    fontSize: 18,
    marginLeft: 137,
    marginTop: 1
  },
  devinRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 18,
    marginTop: 15
  },
  group7: {
    width: 244,
    height: 50,
    marginTop: 9,
    alignSelf: "center"
  },
  dan: {
    color: "#2b2b2b",
    fontSize: 18
  },
  devin8: {
    color: "rgba(43,43,43,1)",
    fontSize: 18,
    marginLeft: 149,
    marginTop: 1
  },
  danRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 18,
    marginTop: 15
  },
  group3: {
    width: 244,
    height: 50,
    marginTop: 11,
    alignSelf: "center"
  },
  dominic: {
    color: "#2b2b2b",
    fontSize: 18
  },
  devin4: {
    color: "#2b2b2b",
    fontSize: 18,
    marginLeft: 115,
    marginTop: 1
  },
  dominicRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 18,
    marginTop: 15
  },
  group4: {
    width: 244,
    height: 50,
    marginTop: 8,
    alignSelf: "center"
  },
  jackson: {
    color: "rgba(43,43,43,1)",
    fontSize: 18
  },
  devin5: {
    color: "rgba(43,43,43,1)",
    fontSize: 18,
    
    marginLeft: 113,
    marginTop: 1
  },
  jacksonRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 18,
    marginTop: 15
  },
  group5: {
    width: 244,
    height: 50,
    marginTop: 9,
    marginLeft: 66
  },
  james: {
    color: "rgba(43,43,43,1)",
    fontSize: 18
  },
  devin6: {
    color: "rgba(43,43,43,1)",
    fontSize: 18,
    marginLeft: 127,
    marginTop: 1
  },
  jamesRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 18,
    marginTop: 15
  },
  group6: {
    width: 244,
    height: 50,
    marginTop: 10,
    alignSelf: "center"
  },
  joel: {
    color: "rgba(43,43,43,1)",
    fontSize: 18
  },
  devin7: {
    color: "rgba(208,2,27,1)",
    fontSize: 18,
    marginLeft: 147,
    marginTop: 1
  },
  joelRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 20,
    marginLeft: 18,
    marginTop: 15
  }
});

export default Ranking_1;
