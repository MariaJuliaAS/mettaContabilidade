import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        closeOnClick={true}
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router} />
    </>
  )
}

export default App
