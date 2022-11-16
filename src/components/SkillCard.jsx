import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function SkillCard({ children }) {
  return (
    <TouchableOpacity style={styles.skillCard}>
      <Text style={styles.skillCard.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  skillCard: {
    backgroundColor: '#222',
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 12,
    text: {
      fontSize: 16,
      color: '#ddd',
      fontWeight: 'bold'
    }
  }
})
