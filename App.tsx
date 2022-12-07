import React from 'react';

import {NhostClient, NhostReactProvider} from '@nhost/react';
import {NhostApolloProvider} from '@nhost/react-apollo';
import {NativeBaseProvider} from 'native-base';
import {theme} from './theme';
import {NavigationContainer} from '@react-navigation/native';
import Authentication from './src/navigations/Authentication';

import {config} from './appConfig';

const nhost = new NhostClient({
  subdomain: config.NHOST_SUBDOMAIN,
  region: config.NHOST_REGION,
});

function App() {
  return (
    <NhostReactProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <Authentication />
          </NavigationContainer>
        </NativeBaseProvider>
      </NhostApolloProvider>
    </NhostReactProvider>
  );
}

export default App;
