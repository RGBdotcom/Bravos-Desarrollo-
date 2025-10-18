import Navbar from "../components/navbar"
import Comentarios from "../components/landing/comentarios"

export default function Resenas() {
    return (
        <main>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
                <h1 className="text-4xl font-bold mb-8">Reseñas de Clientes</h1>
                <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
                    <Comentarios />
                </div>                
            </div>
        </main>
    )
}