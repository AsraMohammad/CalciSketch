import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from '@/screens/home';

import '@/index.css';

const paths = [
  {
    path: '/',
    element: (
      <Home/>
    ),
  },
];

const BrowserRouter = createBrowserRouter(paths); // Corrected the variable name to BrowserRouter

const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={BrowserRouter}/> {/* Fixed the typo */}
    </MantineProvider>
  );
}

export default App;
