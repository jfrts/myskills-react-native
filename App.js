import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList } from 'react-native';
import { Button } from './src/components/Button';
import { SkillCard } from './src/components/SkillCard';

export default function App() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Júlio</Text>
      <TextInput
        value={newSkill}
        onChangeText={setNewSkill}
        placeholder='New skill'
        placeholderTextColor='#888'
        style={styles.input}
        clearButtonMode='always'
      />
      <Button onPressHandle={handleAddNewSkill}>Add</Button>

      <Text style={[styles.title, styles.titleSkills]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard key={item}>{item}</SkillCard>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#fbfbfb',
    fontSize: 22,
    marginBottom: 24
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#aaa',
    fontSize: 18,
    padding: 12,
  },
  titleSkills: {
    marginTop: 48,
    marginBottom: 24,
    paddingBottom: 8,
    borderBottomColor: '#555',
    borderBottomWidth: 1,
  }
});