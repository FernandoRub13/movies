import { useContext } from "react/cjs/react.development";
import HeaderContext from "../context/HeaderContext";

const ToggleNavigationColorButton = () => {

  const {color, toggleColor} = useContext(HeaderContext);

  return (
    <button onClick={()=> toggleColor(!color)} >
      Toggle Navigation Color
    </button>
  )
}

export default ToggleNavigationColorButton
