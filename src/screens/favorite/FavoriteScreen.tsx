import React, { Component } from "react";
import { View } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./FavoriteScreen.style";
import Text from "@shared-components/text-wrapper/TextWrapper";

export default class FavoriteScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h1> SearchScreen </Text>
      </View>
    );
  }
}
