<template>
  <v-container id="cards-section" fluid>
    <v-text-field
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
                <v-col lg="3" md="4" sm="6" xs="12" v-for="researcher in props.items" :key="researcher.id">
                  <router-link :to="{ name: 'visualizer', params: { nodeID: researcher.id } }">
                    <v-card class="mx-auto text-center" max-width="344">
                      <v-card-text>
                        <div class="custom-icon-container" data-color="green">
                          <v-icon>person</v-icon>
                        </div>
                        <v-list-item-title class="mb-1 display-1">{{ researcher.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ researcher.age }}</v-list-item-subtitle>
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

                <v-btn fab dark color="#f2ab3b" class="mr-1" @click="formerPage('Researchers')">
                  <v-icon>keyboard_arrow_left</v-icon>
                </v-btn>

                <v-btn fab dark color="#f2ab3b" class="ml-1" @click="nextPage('Researchers')">
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
                <v-col lg="3" md="4" sm="6" xs="12" v-for="group in props.items" :key="group.id">
                  <router-link :to="{ name: 'visualizer', params: { nodeID: group.id } }">
                    <v-card class="mx-auto text-center" max-width="344">
                      <v-card-text>
                        <div class="custom-icon-container" data-color="purple">
                          <v-icon>people_alt</v-icon>
                        </div>
                        <v-list-item-title class="mb-1 display-1">{{ group.name }}</v-list-item-title>
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

                <v-btn fab dark color="#f2ab3b" class="mr-1" @click="formerPage('Groups')">
                  <v-icon>keyboard_arrow_left</v-icon>
                </v-btn>

                <v-btn fab dark color="#f2ab3b" class="ml-1" @click="nextPage('Groups')">
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
                <v-col lg="3" md="4" sm="6" xs="12" v-for="project in props.items" :key="project.id">
                  <router-link :to="{ name: 'visualizer', params: { nodeID: project.id } }">
                    <v-card class="mx-auto text-center" max-width="344">
                      <v-card-text>
                        <div class="custom-icon-container" data-color="red">
                          <v-icon>assignment</v-icon>
                        </div>
                        <v-list-item-title class="mb-1 display-1">{{ project.name }}</v-list-item-title>
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

                <v-btn fab dark color="#f2ab3b" class="mr-1" @click="formerPage('Projects')">
                  <v-icon>keyboard_arrow_left</v-icon>
                </v-btn>

                <v-btn fab dark color="#f2ab3b" class="ml-1" @click="nextPage('Projects')">
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
        researchers: {
          query: GET_ALL_CHARACTERS,
          update: data => data.Researcher
        },
        groups: {
          query: GET_ALL_LOCATIONS,
          update: data => data.Group
        },
        projects: {
          query: GET_ALL_NATIONS,
          update: data => data.Project
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
            case 'Researchers':
              if (this.charactersPage + 1 <= this.numberOfPagesResearchers) this.charactersPage += 1;
              break;
            case 'Groups':
              if (this.locationsPage + 1 <= this.numberOfPagesGroups) this.locationsPage += 1;
              break;
            case 'Projects':
              if (this.nationsPage + 1 <= this.numberOfPagesProjects) this.nationsPage += 1;
              break;
          }
        },
        formerPage (entity) {
          switch (entity) {
            case 'Researchers':
              if (this.charactersPage - 1 >= 1) this.charactersPage -= 1;
              break;
            case 'Groups':
              if (this.locationsPage - 1 >= 1) this.locationsPage -= 1;
              break;
            case 'Projects':
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

