import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});

  return (
    <div className="text-center mt-5">
      <h1>hola que tal shucolega</h1>
    </div>
  );
};
