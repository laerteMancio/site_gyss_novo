import { Helmet } from "react-helmet-async"

import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Benefits from "./sections/Benefits"
import Products from "./sections/Products"
import About from "./sections/About"
import CTA from "./sections/CTA"
import FAQ from "./sections/FAQ"
import Footer from "./sections/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import ScrollProgress from "./components/ScrollProgress"

function App() {
  return (
    <>
      <Helmet>

        <title>
          Equipamentos Industriais para Codificação e Marcação
        </title>

        <meta
          name="description"
          content="Soluções em equipamentos industriais para codificação, marcação e impressão industrial com excelente custo-benefício."
        />

        <meta
          name="keywords"
          content="impressora inkjet industrial, codificação industrial, marcação industrial, datador industrial"
        />

        <meta
          property="og:title"
          content="Equipamentos Industriais para Codificação"
        />

        <meta
          property="og:description"
          content="Equipamentos industriais com excelente custo-benefício para impressão e marcação."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          name="robots"
          content="index, follow"
        />

      </Helmet>

      <ScrollProgress />

      <Header />
      <Hero />
      <Benefits />
      <Products />
      <About />
      <CTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App