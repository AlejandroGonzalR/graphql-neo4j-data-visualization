# Simple Neo4j with GraphQL data visualizer

Simple Neovis and GraphQL API implementation for obtaining and displaying data from a Neo4j database using a Vue.js application.

## Getting Started

Just run the following command:

```
docker-compose up --build
```

The Vue app will be available on port [8080](http://localhost:8080), the GraphQL Dashboard in port [4001/graphql](http://localhost:4001/graphql) and neo4j database will running in port 7687.

To fill the database you can manually run the available mutations within the **data** folder in the **API** folder, or run the following command into the API folder:

```
npm run seed-db
```

To detail the graph you can click on the desired card from the main Vue screen, to expand it you can double click on the desired node (Neovis "on node click" functionality approach).

## Built With

* [Node.js 10.12.0 LTS](https://nodejs.org/es/) - Runtime environment
* [Neo4j 3.5.12](https://neo4j.com/) - Native graph database

## Authors

* **Alejandro González Rodríguez** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
