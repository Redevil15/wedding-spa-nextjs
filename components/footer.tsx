import { Heart } from "lucide-react"

export const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-8 bg-[#866931]">
      <div className="flex items-center justify-center">
        <h2 className=" py-8 uppercase font-bold tracking-widest text-[25px] text-[#B69F6B] mr-2">Gracias por asitir</h2>
        <Heart className="animate-pulse w-8 h-8" color="#b69f6b" strokeWidth={1.5} />
      </div>
      <img
        src="./logoB.png"
        alt="LogoB"
        className="w-20 h-20"
      />
      <span className="text-[#B69F6B] mb-4 text-xs">&copy; {new Date().getFullYear()} BrandonFDev. All Rights Reserved.</span>
    </div>
  )
}