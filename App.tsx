import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store';
import {DataProvider} from './src/hooks';
import AppNavigation from './src/navigation/App';
import CodePush from 'react-native-code-push';

const App = () => {
  return (
    <DataProvider>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </DataProvider>
  );
};
export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);

// export default CodePush(App);
