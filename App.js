import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image,Button,SafeAreaView } from 'react-native';

export default class App extends Component {

  state = {
    height: 0,
    mass: 0,
    massKG:0,
    heightcm:0,
    resultNumber2:0,
    resultText2:'',
    resultNumber: 0,
    resultText: '',
  }
  handleCalculate = () => {

    let value = (this.state.mass * 703) / Math.pow(this.state.height, 2);
    this.setState({
      resultNumber: value.toFixed(),
    });

    if (value < 18.5) {
      this.setState({ resultText: 'UnderWeight' })
    } else if (value >= 18.5 && value < 25) {
      this.setState({ resultText: 'Normal Weight' })
    } else if (value >= 25 && value < 30) {
      this.setState({ resultText: 'OverWeight' })
    } else {
      this.setState({ resultText: 'Obesity' })
    }
  }
  handleCalculatekG = () => {

    let value = ([this.state.massKG  / this.state.heightcm /this.state.heightcm] * 10000);
    this.setState({
      resultNumber2: value.toFixed(1),
    });

    if (value < 18.5) {
      this.setState({ resultText2: 'UnderWeight' })
    } else if (value >= 18.5 && value < 25) {
      this.setState({ resultText2: 'Normal Weight' })
    } else if (value >= 25 && value < 30) {
      this.setState({ resultText2: 'OverWeight' })
    } else {
      this.setState({ resultText2: 'Obesity' })
    }
  }

  render() {
    return (
      <ImageBackground source={require('./assets/bmi-background.webp')}>

      <SafeAreaView style={{ width: '100%', height: '100%' }}>
        
        <View style={styles.container}>
          <View style={styles.intro}>
            <TextInput placeholder="Height/inch" keyboardType="numeric" style={styles.input} onChangeText={height => this.setState({ height })} />
            <TextInput placeholder="Mass/lbs" keyboardType="numeric" style={styles.input} onChangeText={mass => this.setState({ mass })} />
          </View>

          <Button 
          title="Your BMI IS:"
          onPress={this.handleCalculate}
          />
            
          <Text style={styles.result}>{this.state.resultNumber}</Text>
          <Text style={[styles.result, { fontSize: 25 }]}>{this.state.resultText}</Text>
        </View >

        <View style={styles.container}>
          <View style={styles.intro}>
            <TextInput placeholder="Height/cm" keyboardType="numeric" style={styles.input} onChangeText={heightcm => this.setState({ heightcm })} />
            <TextInput placeholder="Mass/kg" keyboardType="numeric" style={styles.input} onChangeText={massKG => this.setState({ massKG })} />
          </View>

          <Button 
          title="Your BMI IS:"
          onPress={this.handleCalculatekG}
          />

          <Text style={styles.result}>{this.state.resultNumber2}</Text>
          <Text style={[styles.result, { fontSize: 25 }]}>{this.state.resultText2}</Text>
        </View >
      </SafeAreaView>
      </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  intro: {
    flexDirection: 'column',
  },
  input: {
    height: 50,
    textAlign: 'center',
    width: '80%',
    fontSize: 20,
    marginTop: 30,
    color: 'white',
    borderWidth: 2,
    borderColor: "fffff"
  },
  button: {
    backgroundColor: 'black',
  },
  buttonText: {
    alignSelf: 'center',
    padding: 20,
    fontSize: 15,
    color: '#f5ebe0',
    fontWeight: 'bold',
  },
  result: {
    alignSelf: 'center',
    color: '#390099',
    fontSize: 45,
  },
});