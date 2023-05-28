import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Controller from "./Controller";
import "./css/Game.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/store";
import CustomNight from "./CustomNight";

const initialState = {
  mode: "NORMAL",
  Freddy: 10,
  Bonnie: 10,
  Chica: 10,
  Foxy: 10,
};

const Start = () => {
  const [Start, setStart] = useState(false);
  const [stages, setStages] = useState(initialState);

  useEffect(() => {
    console.log(window.innerHeight > window.innerWidth);
    if (window.innerHeight > window.innerWidth) {
      window.alert(
        `Для лучшего еффекта, пожалуйста, поверните свой телефон в альбомный режим (горизонтальное положение).`
      );
    }
  }, []);

  return (
    <>
      {!Start ? (
        <div className="custom-night">
          <CustomNight
            setStart={setStart}
            state={{ ranges: stages, setStages }}
          />
        </div>
      ) : (
        <Controller stages={stages} setStart={setStart} />
      )}
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Start />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
