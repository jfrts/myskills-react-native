import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Button({ children, onPressHandle }) {
  return (
    <TouchableOpacity
      onPress={onPressHandle}
      activeOpacity={0.8}
      style={styles.button}
    >
      <Text style={styles.button.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffbb11',
    borderRadius: 4,
    fontSize: 18,
    padding: 12,
    marginTop: 18,
    buttonText: {
      color: '#764701',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    }
  }
})