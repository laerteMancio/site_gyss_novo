import { motion } from "framer-motion"

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-24 px-6 bg-gray-100"
    >

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="text-green-600 font-semibold uppercase tracking-[0.3em]">

            Diferenciais

          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">

            Benefícios para sua Produção

          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">

            Equipamentos industriais desenvolvidos para aumentar eficiência,
            reduzir custos e melhorar a produtividade da sua operação.

          </p>

        </motion.div>

        {/* CARDS */}

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* CARD 1 */}

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300 border border-transparent hover:border-green-500">

            <div className="text-5xl mb-6">
              ⚡
            </div>

            <h3 className="text-2xl font-bold mb-4">

              Alta Performance

            </h3>

            <p className="text-gray-600 leading-relaxed">

              Equipamentos preparados para operação contínua
              em ambientes industriais de alta demanda.

            </p>

          </div>

          {/* CARD 2 */}

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300 border border-transparent hover:border-green-500">

            <div className="text-5xl mb-6">
              💰
            </div>

            <h3 className="text-2xl font-bold mb-4">

              Excelente Custo-Benefício

            </h3>

            <p className="text-gray-600 leading-relaxed">

              Soluções acessíveis para empresas que buscam
              eficiência e redução de custos operacionais.

            </p>

          </div>

          {/* CARD 3 */}

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300 border border-transparent hover:border-green-500">

            <div className="text-5xl mb-6">
              🛠️
            </div>

            <h3 className="text-2xl font-bold mb-4">

              Suporte Especializado

            </h3>

            <p className="text-gray-600 leading-relaxed">

              Atendimento técnico especializado para instalação,
              operação e manutenção dos equipamentos.

            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}