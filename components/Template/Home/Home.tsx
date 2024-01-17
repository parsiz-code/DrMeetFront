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
import { IGetHomeBlogs } from "@/services/home/interface/getHomeBlogs";
import { IGetHomeFeatures } from "@/services/home/interface/getHomeFeatures";
import { IGetHomeOurServices } from "@/services/home/interface/getHomeOurServices";
import { FC, useEffect } from "react";

interface IProps {
  blogsData: IGetHomeBlogs[];
  featureData: IGetHomeFeatures[];
  ourServicesData: IGetHomeOurServices;
}

const HomeElement: FC<IProps> = ({
  blogsData,
  featureData,
  ourServicesData,
}) => {
  return (
    <>
      {/* <NavBar routeName='' /> */}
      <Header />
      <Service service={ourServicesData} />
      <Categories />
      <YourDoctors features={featureData} />
      <Reservation />
      <JoinUs />
      <Question />
      <Comments />
      <Articles articles={blogsData} />
    </>
  );
};

export default HomeElement;
