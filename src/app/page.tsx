"use client";

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
      <h1>Welcome to CDC Fishing</h1>
      <p>Explore the best fishing experience with CDC Fishing. Contact us at ffgcuong12@gmail.com or 0978531164.</p>
      {/* Your content goes here */}
    </>
  );
}
