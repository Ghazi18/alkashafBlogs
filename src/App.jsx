import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Page from "./components/layout/Page";
import Home from "./pages/Home";
import OneBlog from "./pages/OneBlog";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Page>
        <Routes>
          <Route index path="/" element={<Home />} />
          {/* <Route path="/kofactor" element={<Kofactor />} />
        <Route path="/blog">
          <Route index element={<Blog />} />
          <Route path="/blog/:id" element={<Article />} />
        </Route> */}
          <Route path="/blog/:id" element={<OneBlog />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Page>
    </Router>
  );
}

export default App;
