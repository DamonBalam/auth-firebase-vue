<template>
  <div id="app" class="container mt-3">
    <div >
      <router-link class="btn btn-dark btn-sm mr-2" v-if="existeUsuario"  to="/">Inicio </router-link>  
      <router-link class="btn btn-dark btn-sm mr-2" v-if="!existeUsuario" to="/registro">Registro</router-link> 
      <router-link class="btn btn-dark btn-sm mr-2" v-if="!existeUsuario" to="/acceso">Acceder </router-link>  
      <button v-if="existeUsuario" @click="getCerrarSesion" class="btn btn-dark btn-sm mr-2">Cerrar Sesión</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  name:'App',
  computed: {
    ...mapState(['usuario']),
    ...mapGetters(['existeUsuario'])
  },
  methods: {
    ...mapActions(['getCerrarSesion'])
  },
}
</script>

<style>

</style>
