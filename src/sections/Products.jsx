import products from "../data/products"

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 px-6 bg-white"
    >

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Equipamentos Industriais
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Conheça Nossos Produtos
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Equipamentos desenvolvidos para impressão, marcação
            e codificação industrial com alta eficiência e excelente custo-benefício.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {products.map((product) => (

            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="bg-gray-50 h-72 flex items-center justify-center p-6 overflow-hidden">

                <img
                  src={product.image}
                  alt={product.title}
                  className="
      max-h-full
      max-w-full
      object-contain
      group-hover:scale-105
      transition
      duration-500
    "
                />

              </div>

              <div className="p-8">

                <span className="text-green-600 text-sm font-semibold uppercase tracking-widest">
                  Equipamento Industrial
                </span>

                <h3 className="text-2xl font-bold mt-4 mb-4">
                  {product.title}
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-col gap-4">

                  <button className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-4 rounded-2xl font-bold">
                    Solicitar Orçamento
                  </button>

                  <button className="border border-gray-300 hover:bg-black hover:text-white transition px-6 py-4 rounded-2xl">
                    Ver Detalhes
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}