export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between items-center p-6 bg-white shadow-md">
            <div className="text-2xl font-bold">Bravos</div>
            <ul className="flex flex-row gap-6">
                <li><a href="/" className="text-gray-700 hover:text-gray-900">Inicio</a></li>
                <li><a href="/menu" className="text-gray-700 hover:text-gray-900">Menú</a></li>
                <li><a href="/login" className="text-gray-700 hover:text-gray-900">Iniciar Sesión</a></li>
                <li><a href="/resenas" className="text-gray-700 hover:text-gray-900">Reseñas</a></li>
            </ul>
        </nav>
    )
}