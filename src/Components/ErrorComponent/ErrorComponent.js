//import  useRouteError  from "react-router-dom";

import { Link } from "react-router-dom";
import { Success } from "../Buttons/Buttons";
import Header from "../Header/Header";

function ErrorComponent() {
  //const error = useRouteError();
  //console.error(error);

  return (
    <div className="container">
      <Header Text="Algo desafortunadamente salio mal"/>
      <br/>
      <br/>
      <br/>
      <br/>
        <h1>Oops!</h1>
        <br/><br/><br/>
        <Link to="/">
          <Success Text="Regresar al Inicio" />
        </Link>
    </div>
    
  );
}
export default ErrorComponent