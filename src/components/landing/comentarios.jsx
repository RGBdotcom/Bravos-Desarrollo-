import { User } from "lucide-react"

export default function Comentarios() {
    const lista_reseñas = [
        {
            nombre: "Juan Pérez",
            comentario: "¡Excelente servicio y comida deliciosa! Volveré pronto.",
            calificacion: 5
        },
        {
            nombre: "María Gómez",
            comentario: "El ambiente es muy agradable, pero la espera fue un poco larga.",
            calificacion: 4
        },
        {
            nombre: "Carlos Rodríguez",
            comentario: "No me gustó la calidad de la carne en mi hamburguesa.",
            calificacion: 2
        },
        {
            nombre: "Ana Martínez",
            comentario: "¡Me encantó! Las papas fritas son las mejores que he probado.",
            calificacion: 5
        },
        {
            nombre: "Luis Fernández",
            comentario: "El personal fue muy amable y atento durante toda la visita.",
            calificacion: 4
        }
    ]
    return (
        <section className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col gap-10 md:px-40 lg:py-10">
            <h2 className="text-3xl font-bold">Comentarios</h2>
            <ul className="grid grid-cols-2 gap-6">
                {lista_reseñas.map((reseña, index) => (
                    <li key={index} className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center gap-4 mb-2">
                            <User className="size-8 rounded-full p-1 bg-black/10" />
                            <h3 className="font-semibold">{reseña.nombre}</h3>
                        </div>
                        <p>{reseña.comentario}</p>
                        <p>Calificación: {reseña.calificacion} estrellas</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}