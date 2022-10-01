import axios from 'axios';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {fetchPokeman} from './api/pokeman';

const App = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const mon2 = await fetchPokeman('ditto');

        console.log(mon2);
      } catch (catchError) {
        console.log({catchError});
      }
    };

    getData();
  }, []);

  return (
    <View>
      <Text>Hello Enter Pokeman you would like to see</Text>
    </View>
  );
};

export default App;
