import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-20 px-6 overflow-hidden">

      {/* GLOW BACKGROUND */}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500 opacity-10 blur-3xl rounded-full"></div>

      <motion.div
        className="relative max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="grid md:grid-cols-4 gap-14">

          {/* EMPRESA */}

          <div>

            <h3 className="text-3xl font-bold mb-6 tracking-wide">

              INDUSTRIAL

            </h3>

            <p className="text-gray-400 leading-relaxed">

              Soluções industriais para codificação,
              marcação e impressão com tecnologia,
              eficiência e excelente custo-benefício.

            </p>

          </div>

          {/* NAVEGAÇÃO */}

          <div>

            <h4 className="text-xl font-semibold mb-6">

              Navegação

            </h4>

            <ul className="space-y-4 text-gray-400">

              <li>

                <a
                  href="#benefits"
                  className="hover:text-green-400 transition"
                >
                  Benefícios
                </a>

              </li>

              <li>

                <a
                  href="#products"
                  className="hover:text-green-400 transition"
                >
                  Produtos
                </a>

              </li>

              <li>

                <a
                  href="#about"
                  className="hover:text-green-400 transition"
                >
                  Sobre
                </a>

              </li>

              <li>

                <a
                  href="#faq"
                  className="hover:text-green-400 transition"
                >
                  FAQ
                </a>

              </li>

            </ul>

          </div>

          {/* CONTATO */}

          <div>

            <h4 className="text-xl font-semibold mb-6">

              Contato

            </h4>

            <ul className="space-y-4 text-gray-400">

              <li>
                WhatsApp: (11) 99999-9999
              </li>

              <li>
                contato@empresa.com.br
              </li>

              <li>
                São Paulo - SP
              </li>

            </ul>

          </div>

          {/* HORÁRIOS */}

          <div>

            <h4 className="text-xl font-semibold mb-6">

              Atendimento

            </h4>

            <div className="space-y-4 text-gray-400">

              <p>
                Segunda à Sexta
              </p>

              <p>
                08:00 às 18:00
              </p>

              <button className="mt-4 bg-green-500 hover:bg-green-600 hover:scale-105 transition duration-300 px-6 py-3 rounded-2xl font-bold shadow-lg">

                Solicitar Orçamento

              </button>

            </div>

          </div>

        </div>

        {/* DIVISÃO */}

        <div className="border-t border-gray-800 mt-16 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">

            <p>
              © 2026 Industrial. Todos os direitos reservados.
            </p>

            <p>
              Desenvolvido para soluções industriais modernas.
            </p>

          </div>

        </div>

      </motion.div>

    </footer>
  )
}