import { StyleSheet, Text, View } from 'react-native';

import * as TestExpo47 from 'test-expo-47';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{TestExpo47.hello()}</Text>
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
