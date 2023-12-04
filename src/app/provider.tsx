"use client";

import { BodyComponent, NavbarComponent, FooterComponent } from "@/components/components";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <CacheProvider>
    //   <ChakraProvider>
    //     <Box w={"100%"} minHeight={"100vh"} pt={"70px"}>

    <div className="pt-[100px]">
      <NavbarComponent></NavbarComponent>
      <BodyComponent>{children}</BodyComponent>
      <FooterComponent></FooterComponent>
    </div>
    //     </Box>
    //   </ChakraProvider>
    // </CacheProvider>
  );
}
