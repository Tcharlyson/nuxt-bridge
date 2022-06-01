<template>
  <v-row>
    <v-col cols="12">
      <h1>
        Cette page présente les fonctionnalités de l'application, à savoir :
      </h1>
      <ul>
        <li>Vuetify</li>
        <li>Typescript</li>
        <li>Pinia</li>
      </ul>
    </v-col>
    <v-col cols="12">
      <v-divider></v-divider>
    </v-col>
    <v-col>
      <h3 class="mb-3">Vuetify</h3>
      <!-- Props type checking -->
      <Button label="2"></Button>
      <!-- Invalid props -->
      <Button :label="2"></Button>
    </v-col>
    <v-col cols="12">
      <v-divider></v-divider>
    </v-col>
    <v-col>
      <h3 class="mb-3">Pinia</h3>
      {{ userStore.posts }}
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { usePostStore } from '~/store/post'

export default defineComponent({
  name: 'TryoutPage',
  setup() {
    const userStore = usePostStore()
    userStore.fetchPosts()

    return { userStore }
  },
})
</script>
