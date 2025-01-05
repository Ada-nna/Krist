import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { SavedCardList } from "../DummyContents";

const SavedCards = () => {
  return (
    <section className="w-1/2">
      <button className="bg-black py-3 px-6 flex items-center gap-2 text-[14px] text-white rounded-full transition-all duration-300 active:text-[#b7b7b7]">
        <Plus size={16} color="white" /> <span>Add new card</span>
      </button>

      <div className="mt-4">
        {SavedCardList.map((list) => {
          return (
            <div key={list.id} className="flex justify-between items-center border-b py-5">
              <div className="flex items-center gap-3">
                <section className="flex items-center gap-4">
                  <div
                    style={{
                      backgroundImage: `url(${list.logoImg})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                    className="h-[50px] w-[50px] bg-[#f7f7f7]"
                  ></div>
                  <div>
                    <h3 className="text-[14px] md:text-base font-medium">
                      {list.name}
                    </h3>
                    <p className="mt-1 text-[14px]">{list.cardNo}</p>
                  </div>
                </section>
              </div>
              <button className="bg-red-100 py-2 px-4 flex items-center gap-[6px] text-[13px] text-[red] rounded-full transition-all duration-300 active:text-red-400">
                <Trash2 size={13} color="red" /> <span>Delete</span>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SavedCards;
