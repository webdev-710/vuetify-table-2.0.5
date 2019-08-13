<template>
	<v-app>
        <SidebarComponent></SidebarComponent>
    	<v-content>
    		<v-container class="px-8">
                <router-view/>
    		</v-container>
    	</v-content>
	</v-app>
</template>

<script>
import SidebarComponent from './components/SidebarComponent';

export default {
	name: 'App',
	components: {
		SidebarComponent
	},
	data () {
		return {
		}
	},
	methods: {
	}
};
</script>
