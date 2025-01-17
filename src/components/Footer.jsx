import { Send } from '@/icons/Send'

export function Footer() {
  return (
    <>
      <footer className="w-full p-2 flex justify-center gap-96 bg-slate-800/90 text-white/85">
        <p>REFH4CK &copy; Derechos reservados 2025</p>
        <a href="mailto:refh4ck.dev@gmail.com" className='flex gap-2'>Contacto <Send /></a>

      </footer>
    </>
  )
}
