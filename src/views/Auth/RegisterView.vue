<template>
    <div>
        <h1>Registro</h1>
        {{ usuario }}
        <input type="text" placeholder="Ingrese nombres" v-model="usuario.nombres" required>
        <input type="text" placeholder="Ingrese apellidos" v-model="usuario.apellidos" required>
        <input type="email" placeholder="Ingrese email" v-model="usuario.email" required>
        <input type="password" placeholder="Ingrese contraseña" v-model="usuario.password" required>
        <button @click="registrarse">Guardar</button>
    </div>
</template>
<script>
import { ref } from "vue";
import  authService from "./../../service/authservice";
export default {
    setup() {
        const usuario = ref({})
        const registrarse = async () => {
            const {respuesta} = await authService.registroUsuario(usuario.value);
        }
       
        return {
            usuario,
            registrarse
        }
    }
}
</script>
<style></style>