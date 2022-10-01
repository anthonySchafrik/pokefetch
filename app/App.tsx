import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import StatView from './areas/statsDisplay/stats';

import {fetchPokeman} from './api/pokeman';
import {APIReturnStats} from './types';

const App = () => {
  const [mon, setMon] = useState('');
  const [stats, setStats] = useState([]);

  const handleFetch = async () => {
    try {
      const {data} = await fetchPokeman(mon);

      setStats(
        data.stats.map((statElement: APIReturnStats) => {
          return {name: statElement.stat.name, value: statElement.base_stat};
        }),
      );
    } catch (catchError) {
      console.log({catchError});
    }
  };

  const handleMon = () => (text: string) => setMon(text);

  return (
    <View style={styles.container}>
      <Text>Hello Enter Pokeman you would like to see</Text>
      <TextInput placeholder="Enter Pokemon" onChangeText={handleMon()} />
      <View style={styles.button}>
        <Button onPress={handleFetch} title="Get Pokemon data" />
      </View>

      <StatView baseStats={stats} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  button: {
    marginBottom: 15,
    alignSelf: 'center',
    width: 175,
  },
});

export default App;
