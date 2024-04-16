<template>
    <v-card v-for=" (user, index) in listaDeUsuarios" :key="index" class="ml-4">
    <h1> Nome:  {{ user.nome }}</h1>
    <h1> Telefone:  {{ user.telefone }}</h1>
    <h1> Email:  {{ user.email }}</h1>
    <v-divider></v-divider>
    <v-card-actions class="ml-4">
            <v-btn>editar</v-btn>
            </v-card-actions>
        
    </v-card>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'


const listaDeUsuarios = ref([])

onMounted(()=>{
    axios.get("http://localhost:8080/usuarios").then((response)=>{
        listaDeUsuarios.value = response.data
    })
})
</script>