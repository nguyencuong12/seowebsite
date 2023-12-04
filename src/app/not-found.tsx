import React from "react";
import Image from "next/image";
const NotFound = () => {
  return (
    <div className="min-h-screen w-full border-2 border-rose-500 relative">
      <Image alt="Error 404" fill={true} src="/404.jpg"></Image>
    </div>
  );
};

export default NotFound;
