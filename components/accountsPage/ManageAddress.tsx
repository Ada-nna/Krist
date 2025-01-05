import React from "react";
import { Plus } from "lucide-react";
import AddressCard from "./AddressCard";
import AddNewAddress from "../modals/AddNewAddress";
import { ClientsContactList } from "../DummyContents";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

const ManageAddress = () => {
  return (
    <section>
      <Dialog>
        <DialogTrigger>
          <button className="bg-black py-3 px-6 flex items-center gap-2 text-[14px] text-white rounded-full transition-all duration-300 active:text-[#b7b7b7]">
            <Plus size={16} color="white" /> <span>Add new address</span>
          </button>
        </DialogTrigger>
        <DialogContent className="bg-white border-none">
          <DialogHeader className="font-medium">
            {" "}
            Add a new address{" "}
          </DialogHeader>
          <AddNewAddress />
        </DialogContent>
      </Dialog>

      <div className="md:w-1/2 mt-4">
        {ClientsContactList.map((list) => {
          return (
            <div key={list.id} className="flex flex-col gap-4">
              <AddressCard
                name={list.name}
                address={list.clientAddress}
                phoneNumber={list.phoneNumber}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ManageAddress;
