import { Header } from '../Components/Header/Header'
import TablaArticulos from '../Components/Article/TablaArticulos'


export const Camara = () => {
  return (
    <>
    <Header/>
    <br/>
    <center>
      <strong>
      <h2>Camaras</h2>
      </strong>
      <br/>
    </center>
    <div className="container">
      <TablaArticulos
  url={`${import.meta.env.VITE_API_URL}/cam`}
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
