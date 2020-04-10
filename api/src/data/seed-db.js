import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import charactersMutations from './characters-mutations';
import locationsMutations from './locations-mutations';
import nationsMutations from './nations-mutations';
import relationsMutations from './relations-mutations';

dotenv.config();

const client = new ApolloClient({
    link: new HttpLink({ uri: process.env.GRAPHQL_URI, fetch }),
    cache: new InMemoryCache()
});

client
    .mutate({
        mutation:
            gql(charactersMutations, locationsMutations, nationsMutations, relationsMutations)

    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
