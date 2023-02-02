import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

/* React portals -> portais do react são divs adicionais semelhante a div root que servem
   para inserir componentes que podem sofrer modificações se o css do pai for alterado,
   surgindo dessa forma a necessidade de coloca-los em outro contexto
*/
