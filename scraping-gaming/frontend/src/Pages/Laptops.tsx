import { Header } from '../Components/Header/Header'
import TablaArticulos from '../Components/Article/TablaArticulos'


export const Laptops = () => {
  return (
    <>
    <Header/>
    <br/>
    <center>
      <strong>
      <h2>Laptops</h2>
      </strong>
      <br/>
    </center>
    <div className="container">
    <TablaArticulos
  url={`${import.meta.env.VITE_API_URL}/laptop`}
  columnas={[
    { data: 'id', title: 'ID' },
    { data: 'nombre', title: 'Nombre' },
    { data: 'precio', title: 'Precio' },
    { data: 'tienda', title: 'Tienda' },
  ]}
/>
    </div>
    <br/>
  
    </>
    
  )
}
