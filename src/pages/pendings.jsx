import NavbarPerfil from "../components/perfil/navbar"
import { Hamburger } from "lucide-react"

export default function Pendings() {
  const lista_pendientes = [
    {
      imagen: "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/NOLA/calcmenu/recipes/col-recipies/fruco-tomate-cocineros/HAMBURGUESA%201200x709.png",
      nombre: "Hamburguesa Clásica",
      descripcion: "Jugosa hamburguesa de res con queso cheddar, lechuga, tomate y cebolla en un pan brioche.",
      precio: "S/ 10.00"
    },
    {
      imagen: "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/NOLA/calcmenu/recipes/col-recipies/fruco-tomate-cocineros/HAMBURGUESA%201200x709.png",
      nombre: "Hamburguesa BBQ Bacon",
      descripcion: "Hamburguesa de res con tocino crujiente, queso cheddar, aros de cebolla y salsa BBQ en un pan de ajonjolí.",
      precio: "S/ 10.00"
    }
  ]

  const lista_entregados = [
    {
      imagen: "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/NOLA/calcmenu/recipes/col-recipies/fruco-tomate-cocineros/HAMBURGUESA%201200x709.png",
      nombre: "Hamburguesa Clásica",
      descripcion: "Jugosa hamburguesa de res con queso cheddar, lechuga, tomate y cebolla en un pan brioche.",
      precio: "S/ 10.00",
      estado: "Entregado"
    },
    {
      imagen: "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/NOLA/calcmenu/recipes/col-recipies/fruco-tomate-cocineros/HAMBURGUESA%201200x709.png",
      nombre: "Hamburguesa BBQ Bacon",
      descripcion: "Hamburguesa de res con tocino crujiente, queso cheddar, aros de cebolla y salsa BBQ en un pan de ajonjolí.",
      precio: "S/ 10.00",
      estado: "En camino al domicilio"
    }
  ]


  return (
    <main className="flex flex-col">
      <NavbarPerfil />
      <section className="flex flex-col md:flex-row w-full h-screen">
        <div className="w-full h-full flex flex-col">
          <div className="p-5 flex flex-col items-start justify-center">
            <div className="flex flex-col justify-center items-center rounded-2xl p-3">
              <Hamburger size={50} />
              <span className="text-xl font-bold">Bravos</span>
            </div>
            <h1 className="text-3xl font-bold">Pendientes</h1>
            <ul className="flex flex-col">
              {lista_pendientes.map((item, index) => (
                <li key={index} className="flex flex-row gap-5 my-5 p-3 border rounded-lg">
                  <img src={item.imagen} alt={item.nombre} className="w-24 h-24 object-cover rounded-lg" />
                  <div className="flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">{item.nombre}</h2>
                      <p className="text-gray-600">{item.descripcion}</p>
                    </div>
                    <span className="text-lg font-bold">{item.precio}</span>
                  </div>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => window.location.href = '/pay-out'}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Completar Orden
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-10 bg-secondary text-secondary-content w-full h-full p-8">
              <h1 className="text-4xl font-bold">Entregados</h1>
              <ul className="flex flex-col gap-20">
                {lista_entregados.map((item, index) => (
                  <li key={index} className="flex flex-col lg:flex-row gap-5">
                    <img src={item.imagen} alt={item.nombre} className="w-52 object-cover rounded-lg" />
                    <div className="flex flex-col justify-between gap-2">
                      <div>
                        <h2 className="text-xl font-semibold">{item.nombre}</h2>
                        <p className="">{item.descripcion}</p>
                      </div>
                      <span className="text-lg font-bold">{item.precio}</span>
                      <h2 className="badge">{item.estado}</h2>
                    </div>
                  </li>
                ))}
              </ul>
        </div>
      </section>
    </main>
  )
}