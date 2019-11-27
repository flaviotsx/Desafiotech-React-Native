import React, { Component } from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Keyboard} from 'react-native';
import Svg, { Ellipse } from "react-native-svg";
import {NavigationActions, StackActions} from 'react-navigation';


export default class Home extends Component{

  static navigationOptions = {
   // header: null
  }

  constructor(props){
    super(props);
    this.state = {
      matricula: '',
      senha: ''
    };

    this.entrar = this.entrar.bind(this);

  }

  entrar(){
    if(this.state.matricula === '123456'){
      Keyboard.dismiss();
      //this.props.navigation.navigate('Interna');
      this.props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({routeName: 'Ranking_1'})
        ]
      }))

    }else{
      alert('Aluno não encontrado!');
    }
  }

  render(){
    return (
      <View style={styles.container}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 170.74 170.74" style={styles.ellipse}>
          <Ellipse
            strokeWidth={1}
            fill="rgba(230, 230, 230,1)"
            stroke="rgba(230, 230, 230,1)"
            cx={85}
            cy={85}
            rx={85}
            ry={85}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 141.59 141.59" style={styles.ellipse1}>
          <Ellipse
            strokeWidth={1}
            fill="rgba(78,0,148,1)"
            stroke="rgba(230, 230, 230,1)"
            cx={71}
            cy={71}
            rx={70}
            ry={70}
          ></Ellipse>
        </Svg>
        <Text style={styles.desafioTech}>DesafioTech</Text>
      </View>
      <View style={styles.ellipse2Stack}>
        <Svg viewBox="0 0 55.55 55.55" style={styles.ellipse2}>
          <Ellipse
            strokeWidth={1}
            fill="rgba(230, 230, 230,1)"
            stroke="rgba(230, 230, 230,1)"
            cx={28}
            cy={28}
            rx={27}
            ry={27}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 45.51 45.51" style={styles.ellipse3}>
          <Ellipse
            strokeWidth={1}
            fill="#502a95"
            stroke="rgba(230, 230, 230,1)"
            cx={23}
            cy={23}
            rx={22}
            ry={22}
          ></Ellipse>
        </Svg>
        <Text style={styles.loremIpsum}>?</Text>
      </View>
      <TextInput value={this.state.matricula} style={styles.input}
        onChangeText={(matricula)=> this.setState({matricula: matricula})}
        placeholder=" Número da Matrícula" />
      <TextInput style={styles.input} placeholder=" Nome Completo" />
        <View style={styles.button}>
          <TouchableOpacity style={styles.textButton} onPress={this.entrar}>
            <Text style={styles.textButton}>
              ENTRAR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    backgroundColor: "#d6d7da",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#429",
    height: 40,
    marginHorizontal: 50,
    marginVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "stretch"
  },
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
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 171,
    height: 171,
    position: "absolute"
  },
  ellipse1: {
    top: 15,
    left: 15,
    width: 142,
    height: 142,
    position: "absolute"
  },
  desafioTech: {
    top: 72,
    left: 21,
    color: "rgba(248,231,28,1)",
    position: "absolute",
    transform: [
      {
        rotate: "-24.00deg"
      }
    ],
    fontSize: 26,
    textAlign: "center"
  },
  ellipseStack: {
    width: 171,
    height: 200
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 56,
    height: 56,
    position: "absolute"
  },
  ellipse3: {
    top: 5,
    left: 5,
    width: 46,
    height: 46,
    position: "absolute"
  },
  loremIpsum: {
    top: 14,
    left: 21,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 28
  },
  ellipse2Stack: {
    marginLeft: 260,
    width: 56,
    height: 56
  }
});
