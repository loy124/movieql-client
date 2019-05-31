import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "./apolloClient";

export default class App extends Component {
  render() {
   
    return (
      <ApolloProvider client={client}>
        <div className="App" />
      </ApolloProvider>
    );
  }
}