import { Hamburger } from "lucide-react"
import { LogIn } from "lucide-react"

export default function Formulario() {
    return (
        <section className="flex flex-col gap-8 bg-white/10 rounded-lg shadow-lg backdrop-blur-sm border border-white/20 w-full min-h-screen relative pt-32">
            <a href="/register" className="absolute top-5 left-5 flex flex-row rounded-2xl btn">
                <LogIn className="size-5" />
                <span>Iniciar Sesión</span>
            </a>
            <div className="p-5 flex flex-col justify-center items-center gap-10">
                <Hamburger className="size-32" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-5 md:px-40">
                    <div className="flex flex-col items-start justify-center gap-2 w-full">
                        <span className="font-medium">Tus nombres:</span>
                        <input type="text" placeholder="Pon tus nombres" className="input input-xl w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2 w-full">
                        <span className="font-medium">Email:</span>
                        <input type="email" placeholder="Pon tu email" className="input input-xl w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2 w-full">
                        <span className="font-medium">Contraseña:</span>
                        <input type="password" placeholder="Pon tu contraseña" className="input input-xl w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2 w-full">
                        <span className="font-medium">Repite tu contraseña:</span>
                        <input type="password" placeholder="Repite tu contraseña" className="input input-xl w-full" />
                    </div>
                    <div className="col-span-2 flex flex-col items-start justify-center gap-2 w-full">
                        <span className="font-medium">Dirección:</span>
                        <input type="text" placeholder="Pon tu dirección" className="input input-xl w-full" />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <button className="btn btn-primary btn-wide">Iniciar sesión</button>
                </div>
            </div>
        </section>       
    )
}