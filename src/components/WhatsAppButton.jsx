export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-500
        hover:bg-green-600
        transition
        text-white
        px-6
        py-4
        rounded-full
        shadow-2xl
        font-bold
        flex
        items-center
        gap-3
      "
    >

      <span className="text-2xl">
        💬
      </span>

      <span className="hidden sm:block">
        WhatsApp
      </span>

    </a>
  )
}