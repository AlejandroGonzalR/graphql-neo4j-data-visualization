<template>
  <v-container id="cards-section" fluid>
    <v-text-field
            id="search"
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="search"
            label="Search..."
            style="margin: 25px 10px;"
    ></v-text-field>

    <v-tabs right>
      <v-tab>{{ charactersTitle }}</v-tab>
      <v-tab>{{ locationsTitle }}</v-tab>
      <v-tab>{{ nationsTitle }}</v-tab>

      <br>

      <!-- CHARACTERS CARDS -->

      <v-tab-item>
        <v-container fluid>
          <v-data-iterator
                  :items="characters"
                  :items-per-page.sync="itemsPerPage"
                  :page="charactersPage"
                  :search="search"
                  :sort-by="sortBy.toLowerCase()"
                  :sort-desc="sortDesc"
                  hide-default-footer
                  :no-data-text="noDataText"
                  :no-results-text="noResultsText"
          >
            <template slot-scope="props">
              <v-row>
                <v-col lg="4" md="4" sm="6" xs="12" v-for="character in props.items" :key="character.id">
                  <router-link :to="{ name: 'visualizer', params: { nodeID: character.id } }">
                    <v-card class="mx-auto text-center" max-width="344">
                      <v-card-text>
                        <div class="custom-icon-container" data-color="green">
                          <v-icon>person</v-icon>
                        </div>
                        <v-list-item-title class="mb-1 display-1">{{ character.name }}</v-list-item-title>
                        <v-list-item-subtitle>Age: {{ character.age }}</v-list-item-subtitle>
                      </v-card-text>
                    </v-card>
                  </router-link>
                </v-col>
              </v-row>
            </template>

            <template v-slot:footer>
              <v-row class="mt-2" align="center" justify="center" style="margin: 20px 15px;">
                <v-spacer></v-spacer>

                <span class="mr-4 grey--text">
                  Page {{ charactersPage }} of {{ numberOfPagesResearchers }}
                </span>

                <v-btn fab dark color="#1976d1" class="mr-1" @click="formerPage('Characters')">
                  <v-icon>keyboard_arrow_left</v-icon>
                </v-btn>

                <v-btn fab dark color="#1976d1" class="ml-1" @click="nextPage('Characters')">
                  <v-icon>keyboard_arrow_right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
        </v-container>
      </v-tab-item>

      <!-- LOCATIONS CARDS -->

      <v-tab-item>
        <v-container fluid>
          <v-data-iterator
                  :items="locations"
                  :items-per-page.sync="itemsPerPage"
                  :page="locationsPage"
                  :search="search"
                  :sort-by="sortBy.toLowerCase()"
                  :sort-desc="sortDesc"
                  hide-default-footer
                  :no-data-text="noDataText"
                  :no-results-text="noResultsText"
          >
            <template slot-scope="props">
              <v-row>
                <v-col lg="4" md="4" sm="6" xs="12" v-for="location in props.items" :key="location.id">
                  <router-link :to="{ name: 'visualizer', params: { nodeID: location.id } }">
                    <v-card class="mx-auto text-center" max-width="344">
                      <v-card-text>
                        <div class="custom-icon-container" data-color="purple">
                          <v-icon>people_alt</v-icon>
                        </div>
                        <v-list-item-title class="mb-1 display-1">{{ location.name }}</v-list-item-title>
                      </v-card-text>
                    </v-card>
                  </router-link>
                </v-col>
              </v-row>
            </template>

            <template v-slot:footer>
              <v-row class="mt-2" align="center" justify="center" style="margin: 20px 15px;">
                <v-spacer></v-spacer>

                <span class="mr-4 grey--text">
                  Page {{ locationsPage }} of {{ numberOfPagesGroups }}
                </span>

                <v-btn fab dark color="#1976d1" class="mr-1" @click="formerPage('Locations')">
                  <v-icon>keyboard_arrow_left</v-icon>
                </v-btn>

                <v-btn fab dark color="#1976d1" class="ml-1" @click="nextPage('Locations')">
                  <v-icon>keyboard_arrow_right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
        </v-container>
      </v-tab-item>

      <!-- NATIONS CARDS -->

      <v-tab-item>
        <v-container fluid>
          <v-data-iterator
                  :items="nations"
                  :items-per-page.sync="itemsPerPage"
                  :page="nationsPage"
                  :search="search"
                  :sort-by="sortBy.toLowerCase()"
                  :sort-desc="sortDesc"
                  hide-default-footer
                  :no-data-text="noDataText"
                  :no-results-text="noResultsText"
          >
            <template slot-scope="props">
              <v-row>
                <v-col lg="4" md="4" sm="6" xs="12" v-for="nation in props.items" :key="nation.id">
                  <router-link :to="{ name: 'visualizer', params: { nodeID: nation.id } }">
                    <v-card class="mx-auto text-center" max-width="344">
                      <v-card-text>
                        <div class="custom-icon-container" data-color="red">
                          <v-icon>assignment</v-icon>
                        </div>
                        <v-list-item-title class="mb-1 display-1">{{ nation.name }}</v-list-item-title>
                      </v-card-text>
                    </v-card>
                  </router-link>
                </v-col>
              </v-row>
            </template>

            <template v-slot:footer>
              <v-row class="mt-2" align="center" justify="center" style="margin: 20px 15px;">
                <v-spacer></v-spacer>

                <span class="mr-4 grey--text">
                  Page {{ nationsPage }} of {{ numberOfPagesProjects }}
                </span>

                <v-btn fab dark color="#1976d1" class="mr-1" @click="formerPage('Nations')">
                  <v-icon>keyboard_arrow_left</v-icon>
                </v-btn>

                <v-btn fab dark color="#1976d1" class="ml-1" @click="nextPage('Nations')">
                  <v-icon>keyboard_arrow_right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>

    import  {
      GET_ALL_CHARACTERS,
      GET_ALL_LOCATIONS,
      GET_ALL_NATIONS
    } from '../graphql/queries/graphQueries';

    export default {
      name: 'DefaultContainer',
      apollo: {
        characters: {
          query: GET_ALL_CHARACTERS,
          update: data => data.Character
        },
        locations: {
          query: GET_ALL_LOCATIONS,
          update: data => data.Location
        },
        nations: {
          query: GET_ALL_NATIONS,
          update: data => data.Nation
        }
      },
      data() {
        return {
          tab: null,
          search: '',
          charactersPage: 1,
          locationsPage: 1,
          nationsPage: 1,
          itemsPerPage: 6,
          sortDesc: false,
          sortBy: 'name',
          charactersTitle: 'Simpsons Characters',
          locationsTitle: 'Springfield Locations',
          nationsTitle: 'Nations',
          characters: [],
          locations: [],
          nations: [],
          noDataText: 'No data available',
          noResultsText: 'Oops, nothing was found!'
        }
      },
      computed: {
        numberOfPagesResearchers() {
          return Math.ceil(this.characters.length / this.itemsPerPage)
        },
        numberOfPagesGroups() {
          return Math.ceil(this.locations.length / this.itemsPerPage)
        },
        numberOfPagesProjects() {
          return Math.ceil(this.nations.length / this.itemsPerPage)
        }
      },
      methods: {
        nextPage (entity) {
          switch (entity) {
            case 'Characters':
              if (this.charactersPage + 1 <= this.numberOfPagesResearchers) this.charactersPage += 1;
              break;
            case 'Locations':
              if (this.locationsPage + 1 <= this.numberOfPagesGroups) this.locationsPage += 1;
              break;
            case 'Nations':
              if (this.nationsPage + 1 <= this.numberOfPagesProjects) this.nationsPage += 1;
              break;
          }
        },
        formerPage (entity) {
          switch (entity) {
            case 'Characters':
              if (this.charactersPage - 1 >= 1) this.charactersPage -= 1;
              break;
            case 'Locations':
              if (this.locationsPage - 1 >= 1) this.locationsPage -= 1;
              break;
            case 'Nations':
              if (this.nationsPage - 1 >= 1) this.nationsPage -= 1;
              break;
          }
        }
      },
      mounted() {
        let loader = this.$loading.show();
        if (this.$apollo.loading) {
          loader.hide();
        }
      }
    };
</script>

<style scoped>

  a {
    color: transparent !important;
  }

  div.text--primary {
    color: transparent !important;
  }

</style>

