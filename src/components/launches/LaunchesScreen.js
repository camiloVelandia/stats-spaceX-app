import React from 'react';
import Banner from '../../components/Banner';
import {Container} from './styles';
import Latest from '../../components/Latest';
import RecentLayout from '../../components/RecentLayout';
import BtnLaunches from '../../components/BtnLaunches';
import Search from '../../components/Search';
import {ScrollView, Pressable, Text} from 'react-native';


const LaunchesScreen = (props) => {
 
  return (
    <Container>
      <ScrollView>
        <Banner
          title={'launches'}
          backImage={require('statSpaceX/src/assets/images/starlink1.webp')}
        />
        <Search props={props} />
        <Latest />
        <RecentLayout />
        <BtnLaunches props={props} />
      </ScrollView>
    </Container>
  );
};

export default LaunchesScreen;