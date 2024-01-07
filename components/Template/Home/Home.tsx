import Banner from "./components/banner/banner";
import Categories from "./components/categories/categories";
import Header from "./components/header/Header";
import Service from "./components/service/service";

const HomeElement = () => {
  return (
    <>
      <Header />
      <Service/>
      <Banner/>
      <Categories/>
    </>
  );
};

export default HomeElement;
