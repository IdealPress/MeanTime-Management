import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'

// import TimelineApp from './TimelineApp'
import App from "./App"
import About from './About';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />
  }
  // {
  //   path: "/timeline",
  //   element: <TimelineApp />,
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <PrismicProvider client={client}>
      <RouterProvider router={router} />
    </PrismicProvider>
  // </React.StrictMode>
)
