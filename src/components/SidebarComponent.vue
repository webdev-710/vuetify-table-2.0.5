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
	app
	v-model="drawer"
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

        <template v-slot:append>
        	<v-card
		    flat
		    color="#455A64"
		  	>
		  		<v-layout>
		  			<v-flex>
		  				<v-list-item two-line>
			  				<v-list-item-avatar>
						        <v-img
						        height="40"
						        width="40"
						        src="https://randomuser.me/api/portraits/men/81.jpg"
						        ></v-img>
						    </v-list-item-avatar>
						    <v-list-item-content>
				              	<v-list-item-title>Alexander Nuzhnyi</v-list-item-title>
				              	<v-list-item-subtitle>Inspector</v-list-item-subtitle>
				            </v-list-item-content>
				            <v-btn text icon small>
				            	<v-icon>mdi-dots-vertical</v-icon>
				            </v-btn>
						</v-list-item>
				    </v-flex>
				    <v-flex>

				    </v-flex>
		  		</v-layout>
		  	</v-card>
      	</template>
	</v-navigation-drawer>
</template>

<script>
	export default {
		data () {
	      	return {
		        drawer: true,
		        items: [
		          	{ title: 'Inspections', icon: 'mdi-file-document-box-check-outline', to: "inspections" },
		          	{ title: 'Calendar', icon: 'mdi-calendar-range', to: "calendar" },
		          	{ title: 'Contacts', icon: 'mdi-account-badge', to: "contacts" },
		          	{ title: 'Templates', icon: 'mdi-vector-arrange-below', to: "templates" },
		          	{ title: 'Metrics', icon: 'mdi-poll', to: "metrics" },
		          	{ title: 'Admin', icon: 'mdi-account', to: "admin" },
		        ],
	      	}
	    }
	}
</script>