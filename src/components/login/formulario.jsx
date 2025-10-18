import { Hamburger } from "lucide-react"
import { LogIn } from "lucide-react"

export default function Formulario() {
    return (
        <section className="flex flex-col items-center justify-center gap-8 p-8 bg-white/10 rounded-lg shadow-lg backdrop-blur-sm border border-white/20 w-full h-screen relative">
            <a href="/register" className="absolute top-5 left-5 flex flex-row rounded-2xl btn">
                <LogIn className="size-5" />
                <span>Regístrate</span>
            </a>
            <div className="p-5 flex flex-col items-center justify-center gap-10">
                <Hamburger className="size-32" />
                <div className="flex flex-col items-center justify-between gap-4 w-full">
                    <div className="flex flex-col items-start justify-center gap-2">
                        <span className="font-medium">Email:</span>
                        <input type="email" placeholder="Enter your email" className="input input-xl" />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <span className="font-medium">Password:</span>
                        <input type="password" placeholder="Enter your password" className="input input-xl" />
                    </div>
                </div>
                <div className="w-full">
                    <button className="btn btn-primary w-full">Iniciar sesión</button>
                </div>
            </div>
        </section>       
    )
}