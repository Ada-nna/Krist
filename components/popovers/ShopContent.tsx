import React from "react";
import Link from "next/link";

const ShopContent = () => {
  return (
    <div className="flex items-center gap-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Link href="/" className="font-medium text-[14px]" title="Men">
            Men
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            T-shirts
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Casual shirts
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Formal shirts
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Jackets
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Blazers & Coats
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/" className="font-medium text-[14px]" title="Indian & Festive Wears">
            Indian & Festive Wears
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Kurtas & Kurta set
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Sherwanis
          </Link>
        </div>
      </div>
      <hr className="h-[300px] border border-[#f6f6f6] w-[1px]" />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Link href="/" className="font-medium text-[14px]" title="Women">
            Women
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Crop-tops
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Blazers & Coats
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Skirts
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Denim wears
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Sweat shirts & Knit tops
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/" className="font-medium text-[14px]" title="Western Wears">
            Western Wears
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Dresses
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Jumpsuits
          </Link>
        </div>
      </div>
      <hr className="h-[300px] border border-[#f6f6f6] w-[1px]" />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Link href="/" className="font-medium text-[14px]" title="Footwear">
            Footwear
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Flats
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Casual shoes
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Heels
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Boots
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Sneakers & Floaters
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/" className="font-medium text-[14px]" title="Product features">
            Product features
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            360 product viewer
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Product with video
          </Link>
        </div>
      </div>
      <hr className="h-[300px] border border-[#f6f6f6] w-[1px]" />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Link href="/" className="font-medium text-[14px]" title="Kids">
            Kids
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            T-shirts
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Shirts
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Denim wears
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Pants
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Party wears
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Inner & thermal wears
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Track pants
          </Link>
          <Link
            href="/"
            className="text-[12px] hover:text-slate-600 hover:duration-300"
          >
            Value pack
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopContent;
