<template>
  <div>
    <div v-if="$store.state.favoritos.length < 1">
      No hay Usuarios favoritos
    </div>
    <div v-if="$store.state.favoritos.length >= 1">
      <h2 class="text-lg text-slate-500">Favoritos</h2>
      <table class="w-full mt-4">
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
          <tr v-for="(user, index) in $store.state.favoritos" :key="index">
            <td class="border-r border-b py-1 text-sm border-l w-1/12">
              {{ user.gender }}
            </td>
            <td class="border-r border-b py-1 text-sm w-2/12">
              {{ user.nameFirst }} {{ user.nameLast }}
            </td>
            <td class="border-r border-b py-1 text-sm w-2/12">
              {{ user.email }}
            </td>
            <td class="border-r border-b py-1 text-sm w-1/12">
              {{ user.country }}
            </td>
            <td class="border-r border-b py-1 text-sm w-1/12">
              {{ user.age }}
            </td>
            <td class="border-r border-b py-1 text-sm w-1/12">
              {{ user.registered | formatDate }}
            </td>
            <td class="border-b text-sm">
              <button
                class="px-2 py-1 border bg-slate-500 text-white rounded-lg"
                @click="$store.commit('setDeleteFavoritos', user.phone)"
              >
                Eliminar
              </button>
              
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-center space-x-8">
        <router-link to="/user" class="px-2 mt-4 py-1 border bg-slate-500 text-white rounded-lg">Volver</router-link>
        <button class="px-2 mt-4 py-1 border bg-slate-500 text-white rounded-lg" @click="descargarCsv">Exportar</button>
      </div>
      
    </div>
  </div>
</template>

<script>
import exportFromJSON from 'export-from-json'

export default {
  name: 'FavoritesUsers',
  methods: {
    descargarCsv() {
      const data = this.$store.state.favoritos;
      const fileName = 'download';
      const exportType = exportFromJSON.types.csv
      exportFromJSON({data, fileName, exportType})
    }

  }
};
</script>

<style></style>
