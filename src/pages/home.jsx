import Hero from "../components/landing/hero"
import Comentarios from "../components/landing/comentarios"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Comentarios />
            <Footer />
        </main>
    )
}