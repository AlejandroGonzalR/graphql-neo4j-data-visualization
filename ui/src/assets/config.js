export const graphConfig = {
    container_id: "graph-renderer",
        server_url: "bolt://localhost:7687",
        server_user: "neo4j",
        server_password: "ociteb",
        labels: {
        "Researcher": {
            "caption": "name"
        },
        "Group": {
            "caption": "name"
        },
        "Project": {
            "caption": "name"
        }
    },
    relationships: {
        "BELONGS": {
            "thickness": "weight",
                "caption": false
        },
        "WORKS_ON": {
            "thickness": "weight",
                "caption": false
        },
        "PROJECTS": {
            "thickness": "weight",
                "caption": false
        }
    }
};
