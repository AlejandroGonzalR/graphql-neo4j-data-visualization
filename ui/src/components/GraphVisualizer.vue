<template>
    <v-container id="main-container" fluid>
        <section>
            <div>
                <v-breadcrumbs :items="items" large></v-breadcrumbs>
            </div>
        </section>

        <section id="graph-renderer">&nbsp;</section>
    </v-container>
</template>

<script>

    import NeoVis from 'neovis.js';
    import * as config from '../assets/config';

    let loader;
    let neovisInstance;

    export default {
        name: "GraphVisualizer",
        data() {
            return {
                id: null,
                items: [
                    {
                        text: 'Home',
                        disabled: false,
                        href: 'home',
                    },
                    {
                        text: 'Graph',
                        disabled: true,
                        href: 'visualizer',
                    }
                ]
            }
        },
        methods: {
            renderGraph() {
                config.graphConfig.initial_cypher = `MATCH (a {id: '${this.id}'})-[r]-(b) RETURN r, a, b`;

                neovisInstance = new NeoVis(config.graphConfig);
                neovisInstance.render();
                neovisInstance.registerOnEvent('completed', _ => {
                    document.querySelector('.vis-network').addEventListener('dblclick', this.getClickedNode);
                });
                loader.hide();
            },
            getClickedNode() {
                let node = document.getElementsByClassName('vis-tooltip')[0];

                if (typeof node !== 'undefined') {
                    let hasChild = typeof node.childNodes[7] !== 'undefined';
                    let nodeChildren = hasChild ? node.childNodes[7] : node.childNodes[4];
                    let nodeId = nodeChildren.nodeValue.replace(/\s/g, '');

                    this.updateGraph(nodeId);
                }
            },
            updateGraph(id) {
                loader = this.$loading.show();

                let generalCypherById = `MATCH (a {id: '${id}'})-[r]-(b) RETURN r, a, b`;
                neovisInstance.renderWithCypher(generalCypherById);
                loader.hide();
            }
        },
        beforeMount() {
            loader = this.$loading.show();
            this.id = this.$route.params.nodeID;
        },
        mounted() {
            this.renderGraph();
        }
    }
</script>

<style scoped>

    #main-container {
        height: 100%;
    }

    #graph-renderer  {
        background: #fff;
        border-radius: 15px;
        height: calc(100% - 84px) !important;
        padding: 20px;
        overflow: hidden;
        max-height: 766px;
    }

</style>
