<template>
    <div>
        <h1>Registro de usuarios</h1>
        <form @submit.prevent="getRegistrarUsuario({ email: email, password: pass1 })">
            <input class="form-control mb-2" type="email" placeholder="Ingrese email" v-model="email" />
            <input class="form-control mb-2" type="password" placeholder="Ingrese contraseña" v-model="pass1" />
            <input class="form-control mb-2" type="password" placeholder="Repita contraseña" v-model="pass2" />
            <button class="btn btn-primary" type="submit" :disabled="!desactivar">Registrar</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: 'Registro',
        data() {
            return {
                email: '',
                pass1: '',
                pass2: '',
            };
        },
        computed: {
            ...mapState(['error']),
            desactivar(){
                return this.pass1 === this.pass2 && this.pass1.trim() !== '' && this.pass1.length > 5
            }
        },
        methods: {
            ...mapActions(['getRegistrarUsuario']),
        },
    };
</script>

<style lang="scss" scoped></style>La primera regla del Club de la pelea es: Nadie habla sobre el Club de la pelea
