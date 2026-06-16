import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Music App Works!</Text>
      <Text style={styles.sub}>Ready to build!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  text: { color: '#1DB954', fontSize: 28, fontWeight: 'bold' },
  sub: { color: '#fff', fontSize: 16, marginTop: 10 },
});
