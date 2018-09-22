import React from 'react';
import { ScrollView, 
  StyleSheet, 
  TextInput, 
  View,
  Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class IdeaScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style = {styles.container}>
          <Text style = {styles.getStartedText}>
            とりあえず、アイデアを考えよう！
          </Text>
        </View>
        <View style = {styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder = "作りたいものは？"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  textInput: {
    fontSize: 20,
  },
  getStartedText: {
    padding: 10,
    fontSize: 42,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 50,
    textAlign: 'center',
  },
});
