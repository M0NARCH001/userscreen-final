import { Button } from "./ui/button"
import Image from "next/image"

interface StallCardProps {
  title: string
  category: string
  image: string
  onClick?: () => void
}

export function StallCard({ title, category, image, onClick }: StallCardProps) {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="relative aspect-[16/9] w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="font-medium text-lg text-slate-900 leading-tight font-albert">{title}</h3>
          <p className="text-slate-500 text-sm font-poppins">{category}</p>
        </div>
        <div className="mt-auto flex gap-3">
          <Button
            variant="outline"
            className="flex-1 border-[#284878] text-[#284878] hover:bg-slate-50 rounded-[25px] py-5 bg-transparent font-poppins text-xs font-medium border-[1.5px]"
          >
            View more
          </Button>
          <Button className="flex-1 bg-[#274e7d] hover:bg-[#1e3d63] text-white rounded-[25px] py-5 font-poppins text-xs font-medium">
            Approve
          </Button>
        </div>
      </div>
    </div>
  )
}
