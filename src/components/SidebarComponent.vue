<style scoped>
  .app-logo{
    background-color: white;
    padding: 36px 22px;
  }
  .v-list-item--active .v-list-item__icon, .v-list-item--active .v-list-item__content {
    color: #00a48b;
  }
</style>
<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    clipped
    width="280"
  >
    <div class="app-logo">
      <v-img
        src="../assets/logo.jpg"
        width
      >
      </v-img>
    </div>
    <v-list
      class="py-2"
      nav
    >
      <div
        v-for="item in items"
        :key="item.title"
      >
        <v-list-item
          v-if="!item.children"
          :to="item.to"
          :exact="true"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          v-else
          :prepend-icon="item.icon"
          link
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(child, i) in item.children"
            :key="i"
            :to="child.to"
            link
          >
            <v-list-item-icon>
              <v-icon>mdi-circle-medium</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
  	return {
      drawer: true,
      items: [
      	{ title: 'Default', icon: 'mdi-dots-grid', to: '/default-table' },
      	{ title: 'Server Side Tables', icon: 'mdi-database', children: [
          { title: 'Server Side Search', to: '/server-side-tables/search' },
          { title: 'Server Side Pagination', to: '/server-side-tables/pagination' }
        ] }
      ]
  	}
  }
}
</script>