import { Button } from "./ui/button"

interface StallDetailsProps {
    title: string
    subtitle: string
    items?: { name: string; price: number }[]
    onClose: () => void
    onApprove: () => void
}

export function StallDetails({ title, subtitle, items = [], onClose, onApprove }: StallDetailsProps) {
    return (
        <div className="flex flex-col w-full max-w-[340px] shadow-xl border-[2px] border-[#274e7d] rounded-[30px] overflow-hidden bg-[#f4f4f5]">
            {/* Header Section - White Background */}
            <div className="bg-white p-6 pb-4 border-b border-gray-200">
                <h2 className="text-[28px] leading-tight font-bold text-black font-bricolage mb-2">{title}</h2>
                <p className="text-gray-500 text-sm font-poppins">{subtitle}</p>
            </div>

            {/* Body Section - Light Gray Background */}
            <div className="p-4 space-y-3">
                <div className="space-y-3 mb-6">
                    {items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border border-[#274e7d] rounded-[15px] px-5 py-3 bg-white">
                            <span className="text-[#274e7d] font-medium font-poppins text-sm">{item.name}</span>
                            <span className="text-black font-semibold text-xl font-poppins">₹{item.price}</span>
                        </div>
                    ))}
                </div>

                <div className="flex gap-4 pt-2 pb-2">
                    <Button
                        onClick={onClose}
                        className="flex-1 bg-[#a3a3a3] hover:bg-[#8f8f8f] text-black font-bold rounded-[30px] py-6 font-poppins text-sm border-none shadow-none"
                    >
                        Deny
                    </Button>
                    <Button
                        onClick={onApprove}
                        className="flex-1 bg-[#0f1d35] hover:bg-[#0a1526] text-white font-bold rounded-[30px] py-6 font-poppins text-sm shadow-none"
                    >
                        Approve
                    </Button>
                </div>
            </div>
        </div>
    )
}
