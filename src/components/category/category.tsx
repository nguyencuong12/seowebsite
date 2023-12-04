import React, { useState } from "react";
import { MdChevronRight } from "react-icons/md";

interface CategoryInterface {
  title: string;
}

const CategoryComponent = () => {
  const categories: CategoryInterface[] = [
    {
      title: "Laptop",
    },

    {
      title: "PC Gear",
    },
    {
      title: "Main,CPU,VGA,Tản Nhiệt",
    },
    {
      title: "Case-Nguồn",
    },
    {
      title: "Ổ cứng RAM, Thẻ nhớ",
    },
    {
      title: "Màn hình",
    },
    {
      title: "Bàn phím",
    },
    {
      title: "Chuột",
    },
    {
      title: "Tai nghe",
    },
    {
      title: "Ghế",
    },
  ];

  return (
    <div className="category-custom bg-white h-auto ">
      <div className=" h-auto flex flex-col  h-full">
        {categories.map((item) => (
          <div key={item.title} className="px-4 flex flex-row h-full justify-between items-center p-2 hover:bg-rose-600 hover:text-white">
            <div>{item.title}</div>
            <MdChevronRight className="text-2xl"></MdChevronRight>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
