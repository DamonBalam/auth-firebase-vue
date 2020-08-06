<template>
    <div>
        <h1>Iniciar Sesión</h1>
        <form @submit.prevent="getIniciarSesion({ email: email, password: pass })">
            
                <input class="form-control mb-2" type="email" placeholder="Ingrese email" v-model="email" />
                <input class="form-control mb-2" type="password" placeholder="Ingrese contraseña" v-model="pass" />
                <button class="btn btn-primary btn-sm mt-2" type="submit">Acceder</button>
            
        </form>
        <p>{{ error }}</p>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: 'Acceso',
        data() {
            return {
                email: '',
                pass: '',
            };
        },
        computed: {
            ...mapState(['error']),
        },
        methods: {
            ...mapActions(['getIniciarSesion']),
        },
    };
</script>

<style lang="scss" scoped></style>La primera regla del Club de la pelea es: Nadie habla sobre el Club de la pelea
