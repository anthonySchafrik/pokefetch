import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

import {fetchPokeman} from './api/pokeman';

const App = () => {
  const [mon, setMon] = useState('');

  const handleFetch = async () => {
    try {
      const data = await fetchPokeman(mon);

      console.log(data);
    } catch (catchError) {
      console.log({catchError});
    }
  };

  const handleMon = () => (text: string) => setMon(text);

  return (
    <View>
      <Text>Hello Enter Pokeman you would like to see</Text>
      <TextInput onChangeText={handleMon()} />
      <Button onPress={handleFetch} title="Get Pokemon data" />
    </View>
  );
};

export default App;
