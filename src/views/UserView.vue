<template>
  <div>
    <div class=" space-x-32">
      <h2 class="text-lg text-slate-500">Usuario Seleccionado</h2>
      
      
    </div>
    
    <div class="flex justify-center">
      <div class="border">
        <div class="flex items-center justify-between space-x-32 px-4">
          <img :src="$store.state.user.picture.large" alt="" />
          <div class="flex justify-center items-center space-x-4">
            <router-link to="/favorites-users" class="px-2 py-1 border bg-slate-500 text-white rounded-lg">
              Ver Favoritos
            </router-link>
            <button @click="seleccionarFavorito" class="fill-blue-500">
              <div v-if="!favorito" class="h-8 w-8">
                <img src="../assets/favorito.png" alt="" />
                <p class="text-xs">Añadir</p>
              </div>
              <div v-if="favorito" class="h-8 w-8">
                <img src="../assets/favorito2.png" alt="" />
                <p class="text-xs">Añadido</p>
              </div>
            </button>
          </div>
        </div>
        <div class="mt-4">
          <table class="w-full border">
            <thead class="border w-full">
              <tr class="w-full">
                <th class="text-sm border-r px-1 py-1 w-72">Nombre</th>
                <th class="text-sm border-r px-1 py-1 w-72">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-sm border-r px-1 py-1 w-72">
                  {{ $store.state.user.name.first }}
                  {{ $store.state.user.name.last }}
                </td>
                <td class="text-sm border-r px-1 py-1 w-72">
                  {{ $store.state.user.email }}
                </td>
              </tr>
            </tbody>
          </table>
          <table class="w-full border">
            <thead class="border w-full">
              <tr class="w-full">
                <th class="text-sm border-r px-1 py-1 w-40">Ciudad</th>
                <th class="text-sm border-r px-1 py-1 w-40">Calle</th>
                <th class="text-sm border-r px-1 py-1 w-40">Numero Telefono</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-sm border-r px-1 py-1">
                  {{ $store.state.user.location.city }}
                  {{ $store.state.user.name.last }}
                </td>
                <td class="text-sm border-r px-1 py-1">
                  {{ $store.state.user.location.street.name }}
                </td>
                <td class="text-sm border-r px-1 py-1">
                  {{ $store.state.user.cell }}
                </td>
              </tr>
            </tbody>
          </table>
          
          
        </div>
        <div class="mt-4 mb-2">
          <router-link to="/" class="px-2 mt-4 py-1 border bg-slate-500 text-white rounded-lg text-center">
              Volver
          </router-link>
        </div>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserView",
  data() {
    return {
      favorito: false,
    };
  },

  methods: {
    seleccionarFavorito() {
      this.favorito = !this.favorito

      if (this.favorito == true) {
        this.$store.commit('setFavoritos', this.$store.state.user)  
      }


    },

    agregarFavorito() {

    },
  },
};
</script>

<style></style>
