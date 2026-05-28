import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-neutral-950 via-black to-neutral-900 text-white">

      {/* GLOW BACKGROUND */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500 opacity-10 blur-3xl rounded-full"></div>

      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <span className="text-green-400 font-semibold uppercase tracking-[0.3em]">

          Solicite um Orçamento

        </span>

        <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-8 leading-tight">

          Encontre a Melhor Solução para sua Produção

        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">

          Fale com nossa equipe especializada e descubra
          os equipamentos ideais para aumentar produtividade,
          reduzir custos e otimizar sua operação industrial.

        </p>

        <div className="flex flex-wrap justify-center gap-5">

          <a
            href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="
      bg-green-500
      hover:bg-green-600
      hover:scale-105
      transition
      duration-300
      px-10
      py-5
      rounded-2xl
      font-bold
      text-lg
      shadow-2xl
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
            border-white
            hover:bg-white
            hover:text-black
            hover:scale-105
            transition
            duration-300
            px-10
            py-5
            rounded-2xl
            text-lg
            inline-flex
            items-center
            justify-center
          "
          >

            Falar no WhatsApp

          </a>

        </div>

        {/* TRUST ITEMS */}

        <div className="flex flex-wrap justify-center gap-8 mt-14 text-sm text-gray-400">

          <div>
            ✔ Atendimento Nacional
          </div>

          <div>
            ✔ Suporte Especializado
          </div>

          <div>
            ✔ Equipamentos Industriais
          </div>

        </div>

      </motion.div>

    </section>
  )
}