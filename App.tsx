import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import store from "./src/redux/store/redux";
import TabNavigator from "./src/navigation/TabNavigator/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
}
