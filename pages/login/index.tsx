import React, { useState } from "react";
import { auth } from "../../src/store/firebase-config";
import { useRouter } from 'next/router'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import styles from "./login.module.scss";

const index = () => {
  const [login, setLogin] = useState(true);

  const router = useRouter();

  const handleSubmit = async (event) => {
    // Prevent page reload
    event.preventDefault();
    var { user, pass } = document.forms[0];
    if (login) {
      try {
        const session = await signInWithEmailAndPassword(
          auth,
          user.value,
          pass.value
        );
        router.push('/home');
      } catch (e) {
        console.log(e);
        const tag = document.getElementById("errorMessage");
        tag.style.display = "block";
      }
    } else {
      try {
        const account = await createUserWithEmailAndPassword(
          auth,
          user.value,
          pass.value
        );
        console.log("creado");
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className={styles.login}>
      <h1>MARKETH </h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Celular o Correo</label>
          <input type="text" name="user" required />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" name="pass" required />
        </div>
        <span id="errorMessage" className={styles.messageError}>Error del celular, correo o contraseña</span>
        <button type="submit">
          {login ? "Iniciar sesión" : "Registrarse"}
        </button>
      </form>
      <button onClick={() => setLogin(!login)}>
        {login ? "Crear cuenta" : "Volver a iniciar sesión"}
      </button>
    </div>
  );
};

export default index;
