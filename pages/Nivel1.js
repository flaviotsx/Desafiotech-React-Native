import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import Svg, { Ellipse } from "react-native-svg";


export default function Nivel1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 141.42 134.23" style={styles.ellipse}>
            <Ellipse
              strokeWidth={1}
              fill="rgba(177,255,128,1)"
              stroke="rgba(80,42,149,1)"
              cx={71}
              cy={67}
              rx={70}
              ry={67}
            ></Ellipse>
          </Svg>
          <Text style={styles.loremIpsum}>10</Text>
        </View>
        <Text style={styles.title}>Lógica de Programaão</Text>
      </View>

      <View style={styles.box2}>
        <View style={styles.box3}>
          <View style={styles.underTitle}>
            <Svg viewBox="0 0 141.42 134.23" style={styles.ellipse1}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(177,255,128,1)"
                stroke="rgba(80,42,149,1)"
                cx={71}
                cy={67}
                rx={70}
                ry={67}
              ></Ellipse>
            </Svg>
            <Text>variáveis</Text>
          </View>
          <View>
            <Svg viewBox="0 0 141.42 134.23" style={styles.ellipse1}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(177,255,128,1)"
                stroke="rgba(80,42,149,1)"
                cx={71}
                cy={67}
                rx={70}
                ry={67}
              ></Ellipse>
            </Svg>
            <Text>variáveis</Text>
          </View>
        </View>
        <View style={styles.box3}>
          <View>
            <Svg viewBox="0 0 141.42 134.23" style={styles.ellipse1}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(177,255,128,1)"
                stroke="rgba(80,42,149,1)"
                cx={71}
                cy={67}
                rx={70}
                ry={67}
              ></Ellipse>
            </Svg>
            <Text>variáveis</Text>
          </View>
          <View>
            <Svg viewBox="0 0 141.42 134.23" style={styles.ellipse1}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(177,255,128,1)"
                stroke="rgba(80,42,149,1)"
                cx={71}
                cy={67}
                rx={70}
                ry={67}
              ></Ellipse>
            </Svg>
            <Text>variáveis</Text>
          </View>
        </View>
      </View>

      <View style={styles.box4}>
        <View style={styles.button}>
          <Text style={styles.textButton}>Nível 2</Text>
        </View>

        <View style={styles.button}>
          <Text style={styles.textButton}>Início</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around"
  },
  box1: {
    width: "100%",
    height: 200,
    flex:1,
    paddingTop: 90,
    alignItems: "center",
    justifyContent: "center"
  },
  box2: {
    width: "100%",
    height: 400,
    justifyContent: "center"
  },
  box3: {
    width: "100%",
    height: 135,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15
  },
  box4: {
    width: "100%",
    height: 135,
    justifyContent: "space-around",
    marginTop: 0
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 141,
    height: 134,
    position: "absolute"
  },
  loremIpsum: {
    top: 36,
    left: 31,
    color: "#121212",
    position: "absolute",
    fontSize: 70
  },
  ellipseStack: {
    width: 141,
    height: 134
  },
  ellipse1: {
    width: 141,
    height: 134
  },
  underTitle: {
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
