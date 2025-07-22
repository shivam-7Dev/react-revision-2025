import UseState from "../03-useState/UseState";
import UseEffectHook from "../04-useEffect/UseEffectHook";
import UseRef from "../05-useRef/UseRef";
import UseReducer from "../06-useReducer/UseReducer";
import UseContext from "../07-useContext/UseContext";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <div>
        {/* <UseEffectHook /> */}
        {/* <UseState /> */}
        {/* <UseRef /> */}
        {/* <UseReducer/> */}
        <UseContext />
        <hr />
      </div>
    </AuthContextProvider>
  );
}

export default App;
