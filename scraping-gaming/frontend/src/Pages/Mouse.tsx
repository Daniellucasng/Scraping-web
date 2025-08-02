import { Header } from '../Components/Header/Header'
import TablaArticulos from '../Components/Article/TablaArticulos'


export const Mouse = () => {
  return (
    <>
    <Header/>
    <br/>
    <center>
      <strong>
      <h2>Mouses</h2>
      </strong>
    </center>
    <div className="container">
    <TablaArticulos
  url={`${import.meta.env.VITE_API_URL}/mouse`}
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
