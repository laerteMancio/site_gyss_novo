import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Os equipamentos possuem suporte técnico?",
      answer:
        "Sim. Oferecemos suporte técnico especializado para instalação, operação e manutenção dos equipamentos."
    },

    {
      question: "Vocês atendem todo o Brasil?",
      answer:
        "Sim. Realizamos atendimento para empresas em todo o território nacional."
    },

    {
      question: "Os equipamentos possuem garantia?",
      answer:
        "Sim. Todos os equipamentos possuem garantia conforme especificação do fabricante."
    },

    {
      question: "Como solicitar um orçamento?",
      answer:
        "Basta entrar em contato através do WhatsApp ou formulário da página."
    }
  ]

  function toggleFAQ(index) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="py-24 px-6 bg-gray-100"
    >

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* HEADER */}

        <div className="text-center mb-16">

          <span className="text-green-600 font-semibold uppercase tracking-[0.3em]">

            Perguntas Frequentes

          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">

            Tire suas Dúvidas

          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">

            Confira algumas das principais dúvidas sobre nossos equipamentos industriais.

          </p>

        </div>

        {/* FAQ ITEMS */}

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-transparent hover:border-green-500 transition duration-300"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left p-8"
              >

                <h3 className="text-xl md:text-2xl font-bold pr-6">

                  {faq.question}

                </h3>

                <span className="text-3xl text-green-600">

                  {openIndex === index ? "−" : "+"}

                </span>

              </button>

              <AnimatePresence>

                {openIndex === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >

                    <div className="px-8 pb-8">

                      <p className="text-gray-600 text-lg leading-relaxed">

                        {faq.answer}

                      </p>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </motion.div>

    </section>
  )
}