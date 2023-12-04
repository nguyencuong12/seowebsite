"use client";

import { CategoryComponent, ContainerComponent } from "@/components/components";
import FormProvince from "@/components/formProvince/formProvince";
import FormUserInfo from "@/components/formUserInfo/formUserInfo";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="CDC Fishing | Trang Web Mua Bán Dụng Cụ Câu Cá"
        description="Tận hưởng những phút giây giải trí và thư giãn với CDC Fishing. Liên hệ với chúng tôi tại ffgcuong12@gmail.com hoặc sdt:0978531164."
        canonical="https://www.cdcfishing.com/"
        openGraph={{
          url: "https://www.cdcfishing.com/",
          title: "CDC Fishing | Trang Web Mua Bán Dụng Cụ Câu Cá",
          description:
            "Tận hưởng những phút giây giải trí và thư giãn với CDC Fishing. Liên hệ với chúng tôi tại ffgcuong12@gmail.com hoặc sdt:0978531164.",
          images: [
            {
              url: "https://www.cdcfishing.com/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "CDC Fishing",
            },
          ],
          site_name: "CDC Fishing",
        }}
      />
      <div className="max-w-[300px]">
        <CategoryComponent></CategoryComponent>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-gray-200 p-4">Item 1</div>
        <div className="bg-gray-300 p-4">Item 2</div>
        <div className="bg-gray-400 p-4">Item 3</div>

      </div> */}
    </>
  );
}
