import { Header, Footer } from "../../base";

const MainContainer = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <div className="flex flex-col justify-between relative px-4 pt-24">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;
