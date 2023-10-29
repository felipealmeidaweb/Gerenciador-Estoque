import { useParams } from "react-router-dom";
import ItemForm from "../../components/Itemform";
import UseStock from "../../hooks/useStock";

export default function UpdateItens(){
    const {getItem} = UseStock()
    const {id} = useParams()

    const item = getItem(id)

    return(
        <>
        <ItemForm itemToUpdate={item}/>
        </>
    )
}