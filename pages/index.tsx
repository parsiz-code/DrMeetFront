import HomeElement from "@/components/Template/Home/Home";
import { IResBase } from "@/services/base";
import { IGetHomeBlogs } from "@/services/home/interface/getHomeBlogs";
import { IGetHomeFeatures } from "@/services/home/interface/getHomeFeatures";
import { IGetHomeOurServices } from "@/services/home/interface/getHomeOurServices";
import { useDrmeetAxios } from "@/utils/axios/drmeet";
import { FC } from "react";

interface IProps {
  blogsData: IGetHomeBlogs[];
  featureData: IGetHomeFeatures[];
  ourServicesData: IGetHomeOurServices;
}

const Home: FC<IProps> = ({ blogsData, featureData, ourServicesData }) => {
  return (
    <HomeElement
      blogsData={blogsData}
      featureData={featureData}
      ourServicesData={ourServicesData}
    />
  );
};

export default Home;

export async function getServerSideProps() {
  const { drmeetAxios } = useDrmeetAxios();

  const blogRes = await drmeetAxios.get<IResBase<IGetHomeBlogs[]>>("blog");
  const blogDataList = await blogRes.data.data;

  const featureRes = await drmeetAxios.get<IResBase<IGetHomeFeatures[]>>(
    "Features"
  );
  const featureDataList = await featureRes.data.data;

  const ourServicesRes = await drmeetAxios.get<IResBase<IGetHomeOurServices>>(
    "OurServices"
  );
  const ourServicesDataList = await ourServicesRes.data.data;

  return {
    props: {
      blogsData: blogDataList,
      featureData: featureDataList,
      ourServicesData: ourServicesDataList,
    },
  };
}
