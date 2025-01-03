import React from "react";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";

interface PlaceOrderModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const PlaceOrderModal: React.FC<PlaceOrderModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const route = useRouter();
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-[#ffffff] md:max-w-[445px]">
          <DialogDescription>
            <div className="flex items-center justify-center">
              <div className="circle-container">
                <div className="circle layer-1"></div>
                <div className="circle layer-2"></div>
                <div className="circle layer-3"></div>
                <div className="circle layer-4"></div>
                <span className="checkmark">
                  <Check size={20} />
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-5">
              <h1 className="md:text-[20px] font-medium">
                Your order is confirmed
              </h1>
              <p className="text-[14px] text-[#A4A1AA] mt-3 text-center">
                Thanks for shopping! Your order is confirmed and will be shipped
                soon.
              </p>

              <div className="mt-8 w-full">
                <button
                  type="button"
                  onClick={() => route.push("/product-details")}
                  className="bg-black rounded-full text-[#ffffff] w-full py-[17px]"
                >
                  View Order
                </button>
                <button
                  type="button"
                  onClick={() => route.push("/")}
                  className="bg-black rounded-full text-[#ffffff] mt-4 w-full py-[17px]"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PlaceOrderModal;
