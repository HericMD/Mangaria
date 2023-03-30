import { Component } from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

export default class counter extends Component {
  state = {
    carrinho: 0,
  };

  adicionar() {
    this.setState({ carrinho: this.state.carrinho + 1 });
  }

  remover() {
    this.setState({ carrinho: this.state.carrinho - 1 });
  }

  render() {
    return (
      <View style={styles.carrinho}>
        <Image
          style={{ width: 40, height: 40 }}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/5993/5993337.png',
          }}
        />
        <Text> carrinho: {this.state.carrinho}</Text>
        <View style={styles.buttons}>
          <Button
            style={styles.button}
            onPress={() => this.adicionar()}
            title="+"
          />
          <Text> </Text>
          <Button
            style={styles.button}
            onPress={() => this.remover()}
            title="-"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carrinho: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttons: {
    flexDirection: 'row',
  },
});
