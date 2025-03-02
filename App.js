import "./App.css";
import { Stack, Grid,Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//localstorage save
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { Provider } from "react-redux";
import cartApp from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: 'CartApp',
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartApp)


function App() {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  let persistor = persistStore(store)
  return (
    <Stack className="bg-gray-50 min-h-screen">
      <BrowserRouter basename="/redux-cart">
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Grid container>
            <Grid item xs={2}>
              <Sidebar />
            </Grid>
            <Grid item xs={10} className="max-h-screen overflow-y-scroll">
              <Box className="sticky top-0 z-50 bg-white">
              <Header />
              </Box>
             <Box className="z-10">
             <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products" element={<Products />} />
              </Routes>
             </Box>
            </Grid>
          </Grid>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </Stack>
  );
}

export default App;
