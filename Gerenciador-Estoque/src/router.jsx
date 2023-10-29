import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";




import CreateItens from "./pages/itens/CreateItens";
import ListItens from "./pages/itens/ListItens";
import UpdateItens from "./pages/itens/UpdateItens";
import ItensLayout from "./pages/itens/Layout";
import ShowItem from "./pages/itens/ShowItem";
import Home from "./pages/Home";

const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout/>,
  children: [
    {
    path:"/",
    element: <Home/> }
    ,
    {
      path: "itens",
      element: <ItensLayout/>,
      children: [
        { index: true, element: <ListItens/> },
        { path: "new", element: <CreateItens/> },
        { path: ":id", element: <ShowItem/> },
        { path: ":id/update", element: <UpdateItens/> }
      ]
    }
  ]
}])

export default router;