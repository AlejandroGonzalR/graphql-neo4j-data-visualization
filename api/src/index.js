import { typeDefs } from './graphql-schema';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import { v1 as neo4j } from 'neo4j-driver';
import { makeAugmentedSchema } from 'neo4j-graphql-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const schema = makeAugmentedSchema({
    typeDefs
});

const driver = neo4j.driver(
    process.env.NEO4J_URI || 'bolt://localhost:7687',
    neo4j.auth.basic(
        process.env.NEO4J_USER || 'simpsons',
        process.env.NEO4J_PASSWORD || 'simpsons-data'
    )
);

driver.onError = _ =>  {
    console.log('Neo4j Connection Error.');
    process.exit(0);
};

const server = new ApolloServer({
    context: { driver },
    schema: schema,
    introspection: true,
    playground: true
});

app.use(cors());

const port = process.env.GRAPHQL_LISTEN_PORT || 4001;
const path = "/graphql";

server.applyMiddleware({app, path});

app.listen({port, path}, () => {
    console.log(`GraphQL server ready at http://localhost:${port}${path}`);
});
