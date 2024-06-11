import { Provider } from "react-redux";
import store from "./redux/store";
import { FeedbackForm } from "./components/FeedbackForm";
import {FeedbackList} from "./components/FeedbackList";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto mt-8 p-4 max-w-screen-md">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Feedback App
        </h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <FeedbackForm />
          <FeedbackList />
        </div>
      </div>
        <Footer/>
    </Provider>
  );
}

export default App;
