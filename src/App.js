import { Provider } from "react-redux";
import Card from "./components/Card";
import Products from "./components/Products";
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div className="text-center">
          <h1 className="text-6xl py-5">Products</h1>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <Products/>
        <Card/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
