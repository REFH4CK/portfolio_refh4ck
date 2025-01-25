import { Send } from '@/icons/Send'

export function Footer() {
  return (
    <>
      <footer className="xsm:w-[100%] xsm:gap-2 w-full p-2 flex justify-center lg:gap-96 bg-slate-800/90 text-white/85">
        <p className='xsm:text-[0.75rem]'>REFH4CK &copy; Derechos reservados 2025</p>
        <a href="mailto:refh4ck.dev@gmail.com" className='flex gap-2 xsm:text-[0.75rem]'>Contacto <Send /></a>

      </footer>
    </>
  )
}
