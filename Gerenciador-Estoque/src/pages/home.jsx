
import { Link } from "react-router-dom"
import UseStock from "../hooks/useStock"

export default function Home(){

     const {itens} = UseStock()
     const diversity = itens.length
     const inventoryTotal = itens.reduce((sum, Item )=> +sum + +Item.quantity,0) 
     const today = new Date()
     const limitDate = new Date()
     limitDate.setDate(limitDate.getDate()-10)
     const recentItens = itens.filter((item)=>item.createdAt >= limitDate && item.createdAt <= today)
     const lowQuantityItems = itens.filter((item) => item.quantity < 10)
     const lowQuantityTotal = lowQuantityItems.length

     const recentTotal = recentItens.length
    return(
        <main>
      <h1>Dashboard</h1>
      <div className="row">
        <div className="dashboard-card">
          Diversidade de itens
          <span>{diversity}</span>
        </div>
        <div className="dashboard-card">
          Inventário total
          <span>{inventoryTotal}</span>
        </div>
        <div className="dashboard-card">
          Itens recentes
          <span>{recentTotal}</span>
        </div>
        <div className="dashboard-card">
          Itens acabando
          <span>{lowQuantityTotal}</span>
        </div>
      </div>
      <div className="row">
        <div className="recent">
          <table>
            <thead>
              <tr><th>Itens Recentes</th>
              <th>Ações</th>
            </tr>
            </thead>
            <tbody>
              {recentItens.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td><Link to={`/itens/${item.id}`} className="button is-small">Ver</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="low">
          <table>
            <thead>
              <tr>
                <th>Itens acabando</th>
                <th>Qtd.</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lowQuantityItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td><Link to={`/itens/${item.id}`} className="button is-small">Ver</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
    )
}