import { useLocation } from 'react-router-dom';
import TablaArticulos from '../Components/Article/TablaArticulos';
import { Header } from '../Components/Header/Header';

const apiUrl = import.meta.env.VITE_API_URL;

const Resultados = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('term') || '';

  const columnas = [
    { data: 'id', title: 'ID' },
    { data: 'nombre', title: 'Nombre' },
    { data: 'precio', title: 'Precio' },
    { data: 'tienda', title: 'Tienda' }
  ];

  return (
    <>
      <Header />
      <br />
      <div className="container mt-4">
        <h2>Resultados para: {searchTerm}</h2>
        <TablaArticulos
          url={`${apiUrl}/search?term=${encodeURIComponent(searchTerm)}`}
          columnas={columnas}
        />
      </div>
      <br />
    </>
  );
};

export default Resultados;
