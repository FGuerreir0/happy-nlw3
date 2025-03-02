import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';

import OrphanagesDetails from './pages/OrphanageDetails';

import SelectMapPosition from './pages/createOrphanage/SelectMapPosition';
import OrphanageData from './pages/createOrphanage/OrphanageData';
import Header from './components/Header';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
        <Screen name='OrphanagesMap' component={OrphanagesMap} />
        <Screen
          name='OrphanageDetails'
          component={OrphanagesDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title='Orphanage' />,
          }}
        />

        <Screen
          name='SelectMapPosition'
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title='Select the location' />,
          }}
        />
        <Screen
          name='OrphanageData'
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title='Create Orphanage ' />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
