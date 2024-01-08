import NavBar from "@/components/Modules/Navbar/Navbar";
import Categories from "./components/categories/categories";
import Header from "./components/header/Header";
import Service from "./components/service/service";
import YourDoctors from "./yourDoctors/yourDoctors";

const HomeElement = () => {
  return (
    <>
      {/* <NavBar routeName='' /> */}
      <Header />
      <Service/>
      <Categories/>
      <YourDoctors/>
    </>
  );
};

export default HomeElement;
