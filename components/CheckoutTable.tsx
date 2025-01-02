"use client";
import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { CheckoutTableData } from "./DummyContents";
import CheckoutTableCard from "./CheckoutTableCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CheckoutTable = () => {
  const [count, setCount] = useState<number>(1);

  const handleDecrease = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Products</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Total</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {CheckoutTableData.map((item) => {
          return (
            <TableRow key={item.id}>
              <TableCell>
                <CheckoutTableCard
                  productName={item.productName}
                  productSize={item.productSize}
                  productImage={item.productImage}
                />
              </TableCell>
              <TableCell className="text-base">
                {item.productPrice.toFixed(2)}
              </TableCell>
              <TableCell>
                <div className="relative w-28">
                  <div className="relative w-full">
                    <input
                      type="number"
                      value={count}
                      readOnly
                      className="w-full outline-none text-center text-base cursor-default py-2 border-black border rounded-full"
                    />
                  </div>
                  <button
                    type="button"
                    className="absolute top-[12.5px] left-[10px]"
                    onClick={handleDecrease}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 12h12"
                        stroke="#000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="absolute top-[11px] right-[13px]"
                    onClick={handleIncrease}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 12h12M12 18V6"
                        stroke="#000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </TableCell>
              <TableCell className="text-base">
                {" "}
                {item.totalPrice.toFixed(2)}
              </TableCell>
              <TableCell className="text-right">
                <button type="button" className="border-none outline-none">
                  <Trash2 size={18} color="red" />
                </button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CheckoutTable;
