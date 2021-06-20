import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { MainNavigation } from "./src/config/router.js";
import configureStore from "./src/store/configureStore";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const store = configureStore();
export const _navigator = React.createRef();
export const isReadyRef = React.createRef();
export let backgroundColor = '#f2f2f2';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.app}>
        <Provider store={store}>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor,
  },
});