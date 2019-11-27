import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";


function Nivel1(props) {
  return (
    <View style={styles.container}>
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
      <Text style={styles.lo2}>Lógica de Programação</Text>
      <View style={styles.ellipse1Row}>
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
        <Svg viewBox="0 0 141.42 134.23" style={styles.ellipse2}>
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
      </View>
      <View style={styles.ellipse3Row}>
        <Svg viewBox="0 0 141.42 134.23" style={styles.ellipse3}>
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
        <Svg viewBox="0 0 141.42 134.23" style={styles.ellipse4}>
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
      </View>
      <View style={styles.group1}>
        <View style={styles.rect2}>
          <Text style={styles.Nivel12}>NÍVEL 2</Text>
        </View>
      </View>
      <View style={styles.group2}>
        <View style={styles.rect2}>
          <Text style={styles.inicio}>INICIO</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 309,
    height: 612
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
    height: 134,
    marginLeft: 84
  },
  lo2: {
    color: "#121212",
    marginTop: 3,
    marginLeft: 81
  },
  ellipse1: {
    width: 141,
    height: 134
  },
  ellipse2: {
    width: 141,
    height: 134,
    marginLeft: 27
  },
  ellipse1Row: {
    height: 134,
    flexDirection: "row",
    marginTop: 17
  },
  ellipse3: {
    width: 141,
    height: 134
  },
  ellipse4: {
    width: 141,
    height: 134,
    marginLeft: 27
  },
  ellipse3Row: {
    height: 134,
    flexDirection: "row",
    marginTop: 19
  },
  group1: {
    width: 244,
    height: 50,
    marginTop: 34,
    marginLeft: 33
  },
  rect2: {
    width: 244,
    height: 50,
    backgroundColor: "#502a95",
    borderRadius: 4
  },
  Nivel12: {
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    marginTop: 11,
    marginLeft: 72
  },
  group2: {
    width: 244,
    height: 50,
    marginTop: 23,
    marginLeft: 33
  },
  inicio: {
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    marginTop: 11,
    marginLeft: 82
  }
});

export default Nivel1;