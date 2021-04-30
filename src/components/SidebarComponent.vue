<style scoped>
	.app-logo{
		background-color: white;
		padding: 36px 22px;
	}
	.active-item{
		color: #455a64;
	}
	.v-list-item--active .v-list-item__icon{
		color: #00a48b
	}
	.v-list-item--active .v-list-item__content{
		color: white
	}
</style>
<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    color="#546E7A"
    clipped
    width="280"
  >
    <div class="app-logo">
      <v-img
        src="../assets/logo.jpg"
      >
      </v-img>
    </div>
    <v-list
      class="py-2"
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        dark
        :to="item.to"
        active-class="active-item"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
  	return {
      drawer: true,
      items: [
      	{ title: 'Default', icon: 'mdi-dots-grid', to: 'default-table' },
      	{ title: 'Server Side Tables', icon: 'mdi-database', to: 'server-side-tables' },
      	{ title: 'Inspections', icon: 'mdi-file-document-box-check-outline', to: 'inspections' },
      	{ title: 'Contacts', icon: 'mdi-account-badge', to: 'contacts' },
      	{ title: 'Templates', icon: 'mdi-vector-arrange-below', to: 'templates' },
      	{ title: 'Admin', icon: 'mdi-account', to: 'admin' }
      ]
  	}
  }
}
</script>