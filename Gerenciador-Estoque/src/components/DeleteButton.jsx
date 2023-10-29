
import PropTypes from  "prop-types"
import UseStock from "../hooks/useStock"
import { useNavigate } from "react-router-dom"

DeleteButton.propTypes = {
    itemName: PropTypes.string ,
    itemId: PropTypes.number
}
export default function DeleteButton({itemId,itemName}){
    const {deleteItem} = UseStock()
    const navigate = useNavigate()

   const handleDelete = () =>{
    if(confirm(`tem certeza que deseja excluir ${itemName}`)){
        deleteItem(itemId)
        navigate("/itens")

    }
   }    

    return(
        <button className="button is-danger is-small"
        onClick={handleDelete}
        >excluir</button>
    )
}