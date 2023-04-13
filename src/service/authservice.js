import { http } from "./../../src/service/http";

export default {
  registroUsuario(datos) {
    return http().post("/auth/registro", datos);
  },
  login(datos) {
    return http().post("/auth/login", datos);
  },
};
