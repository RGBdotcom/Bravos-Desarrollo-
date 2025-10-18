import Navbar from "../components/navbar"

export default function Menu() {
    const list_hamburguesas = [
        { name: "Hamburguesa Clásica", price: 5.99, image_url: "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/NOLA/calcmenu/recipes/col-recipies/fruco-tomate-cocineros/HAMBURGUESA%201200x709.png" },
        { name: "Hamburguesa con Queso", price: 6.99, image_url: "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/NOLA/calcmenu/recipes/col-recipies/fruco-tomate-cocineros/HAMBURGUESA%201200x709.png" },
        { name: "Hamburguesa BBQ", price: 7.99, image_url: "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/NOLA/calcmenu/recipes/col-recipies/fruco-tomate-cocineros/HAMBURGUESA%201200x709.png" },
        { name: "Hamburguesa Vegetariana", price: 6.49, image_url: "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/NOLA/calcmenu/recipes/col-recipies/fruco-tomate-cocineros/HAMBURGUESA%201200x709.png" },
        { name: "Hamburguesa Doble", price: 8.99, image_url: "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/NOLA/calcmenu/recipes/col-recipies/fruco-tomate-cocineros/HAMBURGUESA%201200x709.png" },
    ]

    const list_bebidas = [
        { name: "Refresco", price: 1.99, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmemeOnnSGsfHZ2g-LOL6YNLid58R6m_NFCgAhx_Hc5Y-wp0xfrHUlsDk8nRarAhykhyM&usqp=CAU" },
        { name: "Agua Mineral", price: 0.99, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmemeOnnSGsfHZ2g-LOL6YNLid58R6m_NFCgAhx_Hc5Y-wp0xfrHUlsDk8nRarAhykhyM&usqp=CAU" },
        { name: "Jugo Natural", price: 2.49, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmemeOnnSGsfHZ2g-LOL6YNLid58R6m_NFCgAhx_Hc5Y-wp0xfrHUlsDk8nRarAhykhyM&usqp=CAU" },
        { name: "Cerveza", price: 3.99, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmemeOnnSGsfHZ2g-LOL6YNLid58R6m_NFCgAhx_Hc5Y-wp0xfrHUlsDk8nRarAhykhyM&usqp=CAU" },
    ]
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5 px-5 py-10 md:px-10 lg:px-20">
                    <h2 className="text-3xl font-bold">Menú de Hamburguesas</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {list_hamburguesas.map((hamburguesa) => (
                            <li key={hamburguesa.name} className="flex flex-col items-center gap-2">
                                <h3 className="text-xl font-semibold">{hamburguesa.name}</h3>
                                <img src={hamburguesa.image_url} alt={hamburguesa.name} className="w-92 object-cover rounded-md mr-4" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-5 px-5 py-10 md:px-10 lg:px-20">
                    <h2 className="text-3xl font-bold">Menú de Bebidas</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {list_bebidas.map((bebida) => (
                            <li key={bebida.name} className="flex flex-col items-center gap-2">
                                <h3 className="text-xl font-semibold">{bebida.name}</h3>
                                <img src={bebida.image_url} alt={bebida.name} className="w-92 object-cover rounded-md mr-4" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}