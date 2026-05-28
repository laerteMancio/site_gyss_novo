import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white py-24 px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="text-green-400 font-semibold uppercase tracking-[0.3em]">

            Codificação Industrial

          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-6 mb-6">

            Equipamentos Industriais com Excelente Custo-Benefício

          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">

            Soluções modernas para impressão, marcação e codificação industrial,
            desenvolvidas para aumentar a produtividade da sua operação.

          </p>

          <div className="flex flex-wrap gap-4 mb-10">

            <button className="bg-green-500 hover:bg-green-600 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg">

              Solicitar Orçamento

            </button>

            <button className="border border-white hover:bg-white hover:text-black hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl text-lg">

              Ver Produtos

            </button>

          </div>

          <div className="flex flex-wrap gap-8 text-sm text-gray-400">

            <div>
              ✔ Suporte Técnico
            </div>

            <div>
              ✔ Atendimento Nacional
            </div>

            <div>
              ✔ Equipamentos Industriais
            </div>

          </div>

        </motion.div>

        {/* IMAGEM */}

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 rounded-full"></div>

          <img
            src="https://res.cloudinary.com/deocq6es3/image/upload/v1779978098/53501_vsl9e9.jpg"
            alt="Equipamento Industrial"
            className="relative rounded-3xl shadow-2xl border border-gray-800 hover:scale-[1.02] transition duration-500"
          />

        </motion.div>

      </div>

    </section>
  )
}