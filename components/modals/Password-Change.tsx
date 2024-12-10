import React from "react";
import { useRouter } from "next/navigation";
import { Check, AlarmCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PasswordChangeModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const PasswordChangeModal: React.FC<PasswordChangeModalProps> = ({
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
              <h1 className="md:text-[24px] font-medium">Success</h1>
              <p className="text-[14px] md:text-base text-[#A4A1AA] mt-3">Your password has been updated successfully.</p>
              <button
                type="button"
                onClick={() => route.push("/login")}
                className="bg-black rounded-[10px] text-[#ffffff] mt-[30px] w-full py-[17px]"
              >
                Back to login
              </button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PasswordChangeModal;
