import { useState } from "react"

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-black/95 text-white sticky top-0 z-50 border-b border-gray-800 backdrop-blur">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <div>

          <h1 className="text-2xl font-bold tracking-wide">
            INDUSTRIAL
          </h1>

        </div>

        {/* MENU DESKTOP */}

        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wide">

          <a href="#benefits" className="hover:text-green-400 transition">
            Benefícios
          </a>

          <a href="#products" className="hover:text-green-400 transition">
            Produtos
          </a>

          <a href="#about" className="hover:text-green-400 transition">
            Sobre
          </a>

          <a href="#faq" className="hover:text-green-400 transition">
            FAQ
          </a>

        </nav>

        {/* BOTÕES DESKTOP */}

        <div className="hidden md:flex items-center gap-4">



          <a
            href="https://wa.me/5511999999999"
            className="bg-green-500 hover:bg-green-600 transition px-5 py-3 rounded-xl font-bold"
          >

            WhatsApp

          </a>

          <a
            href="#products"
            className="border border-white px-5 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >

            Catálogo

          </a>

        </div>

        {/* BOTÃO MOBILE */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MENU MOBILE */}

      {menuOpen && (

        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6">

          <nav className="flex flex-col gap-6 text-lg">

            <a
              href="#benefits"
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-400"
            >
              Benefícios
            </a>

            <a
              href="#products"
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-400"
            >
              Produtos
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-400"
            >
              Sobre
            </a>

            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="hover:text-green-400"
            >
              FAQ
            </a>

            <button className="bg-green-500 py-4 rounded-xl font-bold">
              WhatsApp
            </button>

          </nav>

        </div>

      )}

    </header>
  )
}