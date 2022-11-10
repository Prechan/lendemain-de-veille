<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Menu
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Lendemain de veille</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Garçon !", icon: "mdi-glass-cocktail", to: '/' },
      { title: "Favoris", icon: "mdi-heart", to: '/favorite' },
      { title: "A propos", icon: "mdi-help-box", to: '/about' },
    ]
  }),
  components: { RouterView },
}
</script>