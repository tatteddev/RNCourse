import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Welcome to my app</Text>
      </View>
      <Text style={{color: "red", margin: 16, borderWidth: 2, borderColor:"green"}}>Hello, World!!!!</Text>
      <Button title='Click Me!'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
