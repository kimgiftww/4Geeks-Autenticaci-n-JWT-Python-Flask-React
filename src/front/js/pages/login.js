import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Private } from "./private";
import ReactDOM from "react-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});

  return (
    <div className="text-center mt-5">
      <input
        placeholder="Introduce usuario"
        onChange={(e) => {
          setUser({ ...user, username: e.target.value });
        }}
      ></input>
      <input
        placeholder="Introduce contraseña"
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
      ></input>
      <button
        onClick={async () => {
          await actions.createToken(user);
          (await store.token) == null
            ? ReactDOM.render(<Private />, document.querySelector("#app"))
            : ReactDOM.render(<Private />, document.querySelector("#app"));
        }}
      >
        Enviar
      </button>
    </div>
  );
};
