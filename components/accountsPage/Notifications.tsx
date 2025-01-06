import React from "react";
import { NotificationsList } from "../DummyContents";

const Notifications = () => {
  return (
    <>
      {NotificationsList.map((list) => {
        return (
          <div
            key={list.id}
            className="flex justify-between items-center border-b py-5"
          >
            <div className="flex items-center gap-3">
              <section className="flex items-center gap-4">
                <div className="h-[50px] w-[50px] bg-[#f7f7f7] rounded-full flex items-center justify-center">
                  {typeof list.image === "string" ? (
                    <div
                      style={{
                        backgroundImage: `url(${list.image})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                      className="h-full w-full rounded-full"
                    ></div>
                  ) : (
                    <list.image.icon
                      size={list.image.size}
                      strokeWidth={list.image.strokeWidth}
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-[14px] md:text-base font-medium">
                    {list.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-[#b7b7b7]">
                    {list.detail}
                  </p>
                </div>
              </section>
            </div>
            <p className="text-[13px] text-[#b7b7b7]">{list.timeStamp}</p>
          </div>
        );
      })}
    </>
  );
};

export default Notifications;
