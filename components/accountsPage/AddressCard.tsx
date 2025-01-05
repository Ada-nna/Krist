import React from "react";
import { PhoneCall, Pencil, Trash2 } from "lucide-react";

interface AddressCardProps {
  name: string;
  address: string;
  phoneNumber: string;
}

const AddressCard: React.FC<AddressCardProps> = ({
  name,
  address,
  phoneNumber,
}) => {
  return (
    <section className="flex items-start justify-between w-full border-b p-4">
      <div>
        <h3 className="text-[14px] font-medium">{name}</h3>
        <p className="text-[13px] my-2">{address}</p>
        <div className="flex items-center gap-2">
          <PhoneCall size={15} strokeWidth={1} />
          <p className="text-[13px]">{phoneNumber}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <button className="bg-gray-100 flex items-center gap-[6px] rounded-full text-[12px] font-medium px-4 py-2 transition-all duration-300 active:text-[#333333] outline-none border-none">
          <Pencil size={12} /> <span>Edit</span>
        </button>

        <button className="bg-red-100 flex items-center gap-[6px] rounded-full text-[12px] font-medium text-[red] px-4 py-2 transition-all duration-300 active:text-red-400 outline-none border-none">
          <Trash2 size={14} color="red" /> <span>Delete</span>
        </button>
      </div>
    </section>
  );
};

export default AddressCard;
