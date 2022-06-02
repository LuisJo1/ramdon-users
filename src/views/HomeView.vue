<template>
  <div class="">
    <div>
      <button
        @click="consultarApi"
        class="px-4 py-2 rounded-lg bg-slate-500 text-white"
      >
        Consultar
      </button>
    </div>
    <div class="mt-8 mb-2">
      <p class="text-slate-500 mb-2">Busqueda</p>
      <div class="mt-2">
        <input
          class="border px-4 py-1 rounded-lg focus:outline-none"
          type="text"
          v-model="busqueda"
          placeholder="Buscar por nacionalidad"
        />
      </div>
    </div>
    <div class="mt-8">
      <table class="w-full">
        <thead class="w-full">
          <tr class="border">
            <th class="border-r py-1 text-sm border-l w-1/12">Género</th>
            <th class="border-r py-1 text-sm w-2/12">Nombre</th>
            <th class="border-r py-1 text-sm w-2/12">Email</th>
            <th class="border-r py-1 text-sm w-1/12">Nacionalidad</th>
            <th class="border-r py-1 text-sm w-1/12">Edad</th>
            <th class="border-r py-1 text-sm w-1/12">Fecha de registro</th>
            <th class="border-r py-1 text-sm w-1/12"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in filtrarOpciones" :key="index">
            <td class="border-r border-b py-1 text-sm border-l w-1/12">
              {{ user.gender }}
            </td>
            <td class="border-r border-b py-1 text-sm w-2/12">
              {{ user.name.first }} {{ user.name.last }}
            </td>
            <td class="border-r border-b py-1 text-sm w-2/12">
              {{ user.email }}
            </td>
            <td class="border-r border-b py-1 text-sm w-1/12">
              {{ user.location.country }}
            </td>
            <td class="border-r border-b py-1 text-sm w-1/12">
              {{ user.dob.age }}
            </td>
            <td class="border-r border-b py-1 text-sm w-1/12">
              {{ user.registered.date | formatDate }}
            </td>
            <td class="border-b text-sm">
              <router-link
                to="/user"
                class="px-2 py-1 border bg-slate-500 text-white rounded-lg"
                ><button @click="$store.commit('setStateUser', user)">Seleccionar</button></router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: "HomeView",

  data() {
    return {
      users: [],
      busqueda: "",
    };
  },

  methods: {
    

    consultarApi() {
      axios.get("https://randomuser.me/api/?results=100").then((response) => {
        this.users = response.data.results;
        this.$store.commit('setStateUsers', this.users)

        console.log(this.users);
      });
    },

    
  },

  computed: {
    filtrarOpciones() {

        let busquedaFiltrada = this.$store.state.users.filter((user) =>
          user.location.country.toLowerCase().startsWith(this.busqueda.toLowerCase())
        );
        console.log(busquedaFiltrada);
        return busquedaFiltrada
      
    },
  },
};
</script>
