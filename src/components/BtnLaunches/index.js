import React, {useEffect} from 'react';
import {Section, Btn, Text} from './styles';

const BtnLaunches = (props) => {

  const target= props
  const HandlePress=(prop, dest)=>{
    prop.props.navigation.navigate(dest);
  }
  


  return (
    <Section>
      <Btn onPress={() => HandlePress(target, 'PastLaunches')}>
        <Text>past launches</Text>
      </Btn>
      <Btn onPress={() => HandlePress(target, 'NextLaunches')}>
        <Text>next launches</Text>
      </Btn>
    </Section>
  );
};

export default BtnLaunches;