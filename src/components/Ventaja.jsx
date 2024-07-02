export default function Ventaja(props) {
  return (
    <a href="/" className="flex flex-col items-center">
      {/* Asegúrate de aplicar transiciones a este div para que tanto la entrada como la salida sean suaves */}
      <div className="hover:animate-slide-out-top animate-delay-400  animate-duration-slow">
        {props.children}
      </div>
      <h1 className="text-4xl">{props.title}</h1>
    </a>
  )
}