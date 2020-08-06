<template>
    <div>
        <h3 class="mt-3">Agregar nueva tarea</h3>
        <form @submit.prevent="agregarTarea(nombre)">
            <div class="form-group">
                <input v-model="nombre" class="form-control" type="text" name="nombre" id="nombre" placeholder="Ej. Ir al banco"/>
                <button class="mt-2 btn btn-primary btn-sm" type="submit">Agregar</button>
            </div>
        </form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: 'Agregar',
        data() {
            return {
                nombre: ''
            }
        },
        methods: {
            ...mapActions(['agregarTarea'])
        },
    };
</script>

<style lang="scss" scoped></style>
