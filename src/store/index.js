import Vue from 'vue';
import Vuex from 'vuex';
import { auth, db } from '../firebase';
import router from '../router';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        usuario: null,
        error: null,
        tareas: [],
        tarea: {
            id: '',
            nombre: '',
        },
    },
    mutations: {
        SET_USUARIO(state, usuario) {
            state.usuario = usuario;
        },
        SET_ERROR(state, error) {
            state.error = error;
        },
        SET_TAREAS(state, tareas) {
            state.tareas = tareas;
        },
        SET_TAREA(state, tarea) {
            state.tarea = tarea;
        },
        SET_ELIMINAR_TAREA(state, id) {
            state.tareas = state.tareas.filter((tarea) => tarea.id != id);
        },
    },
    actions: {
        getTareas({ commit, state }) {
            let tareas = [];
            db.collection(state.usuario.email)
                .get()
                .then((res) => {
                    res.forEach((doc) => {
                        let tarea = doc.data();
                        tarea.id = doc.id;
                        tareas.push(tarea);
                    });
                    commit('SET_TAREAS', tareas);
                });
        },

        getTarea({ commit, state }, idTarea) {
            db.collection(state.usuario.email)
                .doc(idTarea)
                .get()
                .then((doc) => {
                    let tarea = doc.data();
                    tarea.id = doc.id;
                    commit('SET_TAREA', tarea);
                });
        },
        editarTarea({ commit, state }, tarea) {
            db.collection(state.usuario.email)
                .doc(tarea.id)
                .update({
                    nombre: tarea.nombre,
                })
                .then(() => {
                    router.push('/');
                    // console.log('tarea editada!');
                });
        },
        agregarTarea({ commit, state }, nombre) {
            db.collection(state.usuario.email)
                .add({
                    nombre: nombre,
                })
                .then((doc) => {
                    router.push('/');
                });
        },
        eliminarTarea({ commit, state, dispatch }, idTarea) {
            db.collection(state.usuario.email)
                .doc(idTarea)
                .delete()
                .then(() => {
                    // DISPATCH REALIZA PEDIDOS AL SERVIDOR lo recomendable es modificar el state
                    // dispatch('getTareas');
                    commit('SET_ELIMINAR_TAREA', idTarea);
                });
        },
        getRegistrarUsuario({ commit }, usuario) {
            auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
                .then((res) => {
                    const nuevoUser = {
                        email: res.user.email,
                        uid: res.user.uid,
                    };
                    db.collection(res.user.email)
                        .add({
                            nombre: 'tarea de ejemplo',
                        })
                        .then((doc) => {
                            commit('SET_USUARIO', nuevoUser);
                            router.push('/');
                        })
                        .catch((e) => console.log(e));
                })
                .catch((e) => {
                    commit('SET_ERROR', e);
                });
        },
        getIniciarSesion({ commit }, usuario) {
            auth.signInWithEmailAndPassword(usuario.email, usuario.password)
                .then((res) => {
                    const nuevoUser = {
                        email: res.user.email,
                        uid: res.user.uid,
                    };
                    commit('SET_USUARIO', nuevoUser);
                    router.push('/');
                })
                .catch((e) => {
                    commit('SET_ERROR', e);
                });
        },
        getCerrarSesion({ commit }) {
            auth.signOut().then(() => {
                commit('SET_USUARIO', null);
                router.push('/acceso');
            });
        },
        getDetectarUsuario({ commit }, usuario) {
            commit('SET_USUARIO', usuario);
        },
    },
    getters: {
        existeUsuario(state) {
            if (state.usuario === null) {
                return false;
            } else {
                return true;
            }
        },
    },
    modules: {},
});
