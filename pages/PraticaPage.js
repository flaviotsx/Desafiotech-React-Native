import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialButtonGrey from "../components/MaterialButtonGrey";
import Textarea from 'react-native-textarea';
function PraticaPage(props) {
  return (
    <View style={styles.container}>
    <Textarea
    onChangeText={()=>{}}
    style={styles.textArea}
    defaultValue={''}
    maxLength={120}
    placeholder={'#Pratique seus conhecimentos aqui...'}
    placeholderTextColor={'#c7c7c7'}
    underlineColorAndroid={'transparent'}
  />
      <MaterialButtonGrey
        style={styles.materialButtonGrey}
      ></MaterialButtonGrey>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(184,181,181,0.29)"
  },
  textArea: {
    width: '100%',
    height: "50%",
    borderRadius: 19,
    borderWidth:1,
    borderColor:"#ccc",
    borderStyle:"solid",
    marginTop: '45%',
    marginBottom:"10%"
  },
  materialButtonGrey: {
    width: 174,
    height: 36,
    borderRadius: 22,
    marginTop: 44,
    alignSelf: "center"
  }
});

export default PraticaPage;
