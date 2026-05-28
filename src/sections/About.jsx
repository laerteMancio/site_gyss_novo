import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white overflow-hidden"
    >

      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* TEXTO */}

        <div>

          <span className="text-green-600 font-semibold uppercase tracking-[0.3em]">

            Sobre a Empresa

          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">

            Soluções Industriais com Tecnologia e Confiabilidade

          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">

            Atuamos no fornecimento de equipamentos para codificação,
            marcação e impressão industrial, oferecendo soluções modernas
            para diferentes segmentos da indústria.

          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">

            Trabalhamos com equipamentos de excelente custo-benefício,
            suporte técnico especializado e atendimento personalizado
            para ajudar sua produção a operar com máxima eficiência.

          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">

            Nossa missão é entregar produtividade, segurança
            e tecnologia acessível para empresas em todo o Brasil.

          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="
      bg-green-500
      hover:bg-green-600
      hover:scale-105
      transition
      duration-300
      text-white
      px-8
      py-4
      rounded-2xl
      font-bold
      shadow-lg
      inline-flex
      items-center
      justify-center
    "
            >

              Solicitar Orçamento

            </a>

            <a
              href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista."
              target="_blank"
              rel="noopener noreferrer"
              className="
              border
              border-gray-300
              hover:bg-black
              hover:text-white
              hover:border-black
              hover:scale-105
              transition
              duration-300
              px-8
              py-4
              rounded-2xl
              font-medium
              inline-flex
              items-center
              justify-center
            "
            >

              Falar com Especialista

            </a>

          </div>

        </div>

        {/* IMAGEM */}

        <div className="relative">

          <div className="absolute inset-0 bg-green-500 blur-3xl opacity-10 rounded-full"></div>

          <img
            src="https://res.cloudinary.com/deocq6es3/video/upload/v1779992999/principal_glqhva.mp4"
            alt="Indústria moderna"
            className="relative rounded-3xl shadow-2xl hover:scale-[1.02] transition duration-500 border border-gray-200"
          />

        </div>

      </motion.div>

    </section>
  )
}