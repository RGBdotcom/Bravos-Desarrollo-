export default function Login() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center relative">
            <a href="/" className="absolute top-8 left-8 text-3xl font-bold btn">Bravos</a>
            <h1 className="text-4xl font-bold mb-4">Página de registro</h1>
            <form className="flex flex-col gap-4 w-80 py-10">
                <div className="flex flex-col">
                    <span className="text-sm">Nombres</span>
                    <input
                        type="text"
                        placeholder="Tus nombres"
                        className="input"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm">Correo</span>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="input"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm">Nombre de usuario</span>
                    <input
                        type="text"
                        placeholder="Username"
                        className="input"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm">Contraseña</span>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input"
                    />                    
                </div>
                <button
                    type="button"
                    onClick={() => window.location.href = '/pendings'}
                    className="btn btn-primary"
                >
                    Login
                </button>
            </form>
        </main>
    )
}