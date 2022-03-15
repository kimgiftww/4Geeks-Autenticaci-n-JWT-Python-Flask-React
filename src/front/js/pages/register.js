import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Register = () => {
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
        onClick={() => {
          fetch(
            "https://3001-4geeksacademy-reactflask-1x9ygmtztrj.ws-eu34.gitpod.io/api/register",
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(user),
            }
          )
            .then((res) => {
              return res.json();
            })
            .then((data) => console.log(data));
        }}
      >
        Enviar
      </button>
    </div>
  );
};
