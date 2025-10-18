export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = '/pendings';
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center relative">
            <a href="/" className="absolute top-8 left-8 text-3xl font-bold btn">Bravos</a>
            <a href="/registrarse" className="absolute top-8 right-8 text-sm btn">¿No tienes una cuenta? Regístrate</a>
            <h1 className="text-4xl font-bold mb-4">Login Page</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 py-10">
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
                    type="submit"
                    className="btn btn-primary"
                >
                    Login
                </button>
            </form>
        </main>
    )
}