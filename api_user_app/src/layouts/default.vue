<template>
  <v-app>
    <DefaultBar />

    <DefaultView />
  </v-app>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
import DefaultBar from './default/AppBar.vue'
  import DefaultView from './default/View.vue'


let teste = ref('')

onMounted(()=>{
  
})

</script>
