import React from "react";
import { Pencil } from "lucide-react";
import BillingForm from "../billingDetails/BillingForm";

const ProfileForm = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="relative">
          <div
            className="h-[80px] w-[80px] rounded-full"
            style={{
              backgroundImage: "url('/headshot-female.jpg')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <button className="bg-black p-2 rounded-full absolute bottom-0 md:left-[50px]">
            <Pencil size={16} color="white" />
          </button>
        </div>

        <button className="bg-black py-3 px-6 flex items-center gap-2 text-[14px] text-white rounded-full transition-all duration-300 active:text-[#b7b7b7]">
          <Pencil size={16} color="white" /> <span>Edit Profile</span>
        </button>
      </div>

      <form>
        <BillingForm />
      </form>
    </div>
  );
};

export default ProfileForm;
