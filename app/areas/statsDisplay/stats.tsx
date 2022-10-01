import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BaseStats} from '../../types';

interface Props {
  baseStats: BaseStats[];
}

const StatView = ({baseStats}: Props) => {
  return (
    <View>
      {baseStats.length > 0 &&
        baseStats.map(stat => {
          return (
            <Text
              style={styles.statRow}
              key={stat.name}>{`Base ${stat.name} is ${stat.value}`}</Text>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  statRow: {
    marginVertical: 2,
    alignSelf: 'center',
  },
});

export default StatView;
