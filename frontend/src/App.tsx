import { Provider } from "react-redux";
import store from "./redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto mt-8 p-4 max-w-screen-md">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Feedback App
        </h1>
      </div>
    </Provider>
  );
};
