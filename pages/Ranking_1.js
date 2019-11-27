import React, { Component } from "react";
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Keyboard, FlatList} from 'react-native';

export default class  Ranking_1 extends Component{

    constructor(props){
        super(props);
            this.state = {
                obj : [
                    { key: "Devin", ranking: 4.9 },
                    { key: "Dan", ranking: 4.8 },
                    { key: "Dominic", ranking: 4.5 },
                    { key: "Jackson", ranking: 4.4 },
                    { key: "James", ranking: 4.1 },
                    { key: "Joel", ranking: 3.7 }
                  ]
            }
        }
  render() {
        return (
            <View style={styles.container}>
            <View style={styles.box1}>
            <Text style={styles.title}>Ranking</Text>
            </View>

            <View style={styles.box2}>
            <FlatList
                data={this.state.obj}
                contentContainerStyle={styles.flatbox}
                renderItem={({ item }) => (
                <View style={styles.box3}>
                    <Text style={styles.item}>{item.key}</Text>
                    <Text style={styles.item2}>{item.ranking}</Text>
                </View>
                )}
            />
            </View>

            <View style={styles.button}>
                <TouchableOpacity style={styles.textButton} onPress={() => { this.props.navigation.navigate({routeName: 'Nivel1'}) }}>
                    <Text style={styles.textButton}>Desafio</Text>
                </TouchableOpacity>
            </View>
            
        </View>   
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around"
    },
    box1: {
      width: "100%",
      height: 50,
      marginTop: 50,
      alignItems: "center",
      justifyContent: "center"
    },
    box2: {
      width: "100%",
      height: 400,
      justifyContent: "center"
    },
    box3: {
      width: 250,
      height: 50,
      backgroundColor: "#eee",
      borderColor: "purple",
      borderWidth: 3,
      borderRadius: 4,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15
    },
    flatbox: {
      height: 350,
      width: "100%",
      alignItems: "center"
    },
    title: {
      fontSize: 20
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44
    },
    item2: {
      padding: 10,
      fontSize: 18,
      height: 44
    },
    button: {
      backgroundColor: "#429",
      borderRadius: 4,
      height: 40,
      justifyContent: "center",
      marginHorizontal: 50,
      marginTop: 20,
      marginBottom: 50
    },
    textButton: {
      color: "rgba(248,231,28,1)",
      fontSize: 26,
      textAlign: "center"
    }
  });
  