"use client";
import React, { useState } from "react";
import Sidebar from "@/components/accountsPage/Sidebar";
import OrderCard from "@/components/accountsPage/OrderCard";
import ProfileForm from "@/components/accountsPage/ProfileForm";
import {
  CheckoutTableData,
  ProfileSidebarList,
  getOrderStatusColor,
  getOrderStatusBgColor,
} from "@/components/DummyContents";

const page = () => {
  const [isActive, setIsActive] = useState<string>(
    ProfileSidebarList[0].option
  );

  return (
    <div className="container px-4 md:px-6 py-4 md:py-6 flex-1">
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <Sidebar isActive={isActive} setIsActive={setIsActive} />
        </div>

        {/* Right Hand Side */}
        <section className="w-full flex flex-col">
          {isActive === ProfileSidebarList[0].option && <ProfileForm />}

          {isActive === ProfileSidebarList[1].option &&
            CheckoutTableData.map((list: any) => {
              return (
                <div key={list.id}>
                  <OrderCard
                    productImage={list.productImage}
                    productName={list.productName}
                    productSize={list.productSize}
                    productQty={list.productQuantity}
                    totalPrice={list.totalPrice}
                    statusColor={getOrderStatusColor(list.status)}
                    statusBgColor={getOrderStatusBgColor(list.status)}
                    status={list.status}
                    statusMessage={list.message}
                    orderBtn1={list.btn1}
                    orderBtn2={list.btn2 || ""}
                  />

                  <hr className="w-full my-4" />
                </div>
              );
            })}
        </section>
      </div>
    </div>
  );
};

export default page;
