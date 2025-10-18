export default function Hamburguesas() {
    const hamburguesas = [
        {
            id: 1,
            nombre: "Hamburguesa Clásica",
            descripcion: "Jugosa carne de res con lechuga, tomate, cebolla y salsa especial",
            precio: 8.99,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddjpE64jVcMqw9x270i2vfbklSHIt-LzP7w&s",
            categoria: "clásica",
            ingredientes: ["carne de res", "lechuga", "tomate", "cebolla", "pan", "salsa especial"],
            calorias: 450,
            disponible: true,
            tiempo_preparacion: 8
        },
        {
            id: 2,
            nombre: "Hamburguesa BBQ",
            descripcion: "Deliciosa hamburguesa con salsa BBQ ahumada, cebolla caramelizada y bacon",
            precio: 9.99,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZlu-MLr4dNsXSlJ1ft4gE-lRWJspKcGBzw&s",
            categoria: "gourmet",
            ingredientes: ["carne de res", "salsa BBQ", "cebolla caramelizada", "bacon", "pan brioche"],
            calorias: 580,
            disponible: true,
            tiempo_preparacion: 10
        },
        {
            id: 3,
            nombre: "Hamburguesa con Queso",
            descripcion: "Clásica hamburguesa con doble queso cheddar derretido",
            precio: 10.99,
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxY_ADgrZjHHdjqFD5bce0-pc_NHR3E0Tyg&s   ",
            categoria: "clásica",
            ingredientes: ["carne de res", "queso cheddar", "lechuga", "tomate", "pan", "mayonesa"],
            calorias: 520,
            disponible: true,
            tiempo_preparacion: 7
        }
    ]
    return (
        <section className="py-8 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestras Hamburguesas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {hamburguesas.map(hamburguesa => (
                    <div key={hamburguesa.id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img 
                                src={hamburguesa.imagen} 
                                alt={hamburguesa.nombre}
                                className="w-full h-48 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title">{hamburguesa.nombre}</h3>
                            <p className="text-sm text-base-content/70">{hamburguesa.descripcion}</p>
                            
                            <div className="flex justify-between items-center my-2">
                                <span className="text-2xl font-bold text-primary">${hamburguesa.precio}</span>
                                <div className="flex gap-2">
                                    <div className="badge badge-secondary">{hamburguesa.categoria}</div>
                                    <div className="badge badge-outline">{hamburguesa.tiempo_preparacion} min</div>
                                </div>
                            </div>
                            
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="checkbox" /> 
                                <div className="collapse-title text-sm font-medium">
                                    Ingredientes
                                </div>
                                <div className="collapse-content"> 
                                    <ul className="list-disc list-inside text-sm space-y-1">
                                        {hamburguesa.ingredientes.map((ingrediente, index) => (
                                            <li key={index}>{ingrediente}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="text-sm text-base-content/60 mt-2">
                                {hamburguesa.calorias} calorías
                            </div>
                            
                            <div className="card-actions justify-end mt-4">
                                <button 
                                    className={`btn btn-primary ${!hamburguesa.disponible ? 'btn-disabled' : ''}`}
                                    disabled={!hamburguesa.disponible}
                                >
                                    {hamburguesa.disponible ? 'Ordenar' : 'No disponible'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>      
    )
}