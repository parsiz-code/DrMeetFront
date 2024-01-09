import NavBar from "@/components/Modules/Navbar/Navbar";
import Categories from "./components/categories/categories";
import Header from "./components/header/Header";
import Service from "./components/service/service";
import YourDoctors from "./components/yourDoctors/yourDoctors";
import Reservation from "./components/reservation/reservation";
import JoinUs from "./components/joinUs/joinUs";
import Question from "./components/Question/Question";
import Comments from "./components/comments/comments";
import Articles from "./components/articles/articles";

const HomeElement = () => {
  return (
    <>
      {/* <NavBar routeName='' /> */}
      <Header />
      <Service />
      <Categories />
      <YourDoctors />
      <Reservation />
      <JoinUs />
      <Question/>
      <Comments/>
      <Articles/>
    </>
  );
};

export default HomeElement;
