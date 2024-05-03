import logo from "./logo.svg";
import "./App.css";
import SignInSide from "./SignInSide";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Data from "./pages/Data";
import NoPage from "./pages/NoPage";
import React, { useContext } from "react";

export default function App() {
  // const { googleSignIn, logOut } = useContext(AuthContextProvider);

  const isSignedIn = true;
  if (isSignedIn) {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/data" element={<Data />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <AuthContextProvider>
            <SignInSide />
          </AuthContextProvider>
        </header>
      </div>
    );
  }
}

// export { AuthContext, AuthContextProvider };

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <AuthContextProvider>
//           <SignInSide />
//         </AuthContextProvider>
//       </header>
//     </div>
//   );
// }

// export default App;
