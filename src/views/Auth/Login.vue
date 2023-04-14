<template>
    <h1>Ingresar</h1>
    {{ usuario }}
    <br>
    <input type="email" v-model="usuario.email" placeholder="Ingrese email">
    <input type="password" v-model="usuario.password" placeholder="Ingrese contraseña">
    <button @click="login">Ingresar</button>
    <br>{{ jwt }}
    <p v-if="error">{{ error }}</p>
</template>

<script>

import authService from '../../service/authservice'
import { ref } from "vue";

export default {
    setup() {
        const usuario = ref({ email: "", password: "" })
        const jwt = ref({})
        const error = ref(null)
        const login = async () => {
            try {
                const respuesta  = await authService.login(usuario.value);
                jwt.value = respuesta
            } catch (error) {
                error.value = error
            }

        }
        return {
            usuario,
            login,
            jwt, 
            error
        }
    },

    data() {
        return {
            email: '',
            password: '',
            checked: false
        }
    },


    computed: {

    }
}
</script>

<style scoped></style>