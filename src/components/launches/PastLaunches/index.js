import React from 'react';
import PastLayout from '../../PastLayout';
import {ScrollView, Text} from 'react-native';

const PastLaunches = () => {
  return (
    <ScrollView style={{backgroundColor:'#000'}}>
      <PastLayout />
    </ScrollView>
  );
};

export default PastLaunches;