import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: React.ReactNode ;
};

const MainLayout: React.FC<Props> = ({children }) => {
  return (
    <body className="flex flex-col min-h-screen">
      <Header />
      <main className="py-16 mt-[102px]">
        {children}
      </main>
      <Footer />
    </body>
  );
};

export default MainLayout ;
