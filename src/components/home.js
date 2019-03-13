import React, { Component } from "react";
import { View, Text } from "react-native";
import FilmesComponent from "./filmes";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Filmes"
  };

  render() {
    return (
      <View>
        <FilmesComponent />
      </View>
    );
  }
}

export default HomeScreen;
