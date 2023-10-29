import { useContext } from "react"
import { StockContext} from "../context/StockContext"


export default  function UseStock() {
    return useContext(StockContext)
}