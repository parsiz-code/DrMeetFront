import { toPersianDigits } from "@/helper/dateTimeHelper";
import { IGetHomeOurServices } from "@/services/home/interface/getHomeOurServices";
import { Grid } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

interface IProps {
  service: IGetHomeOurServices;
}

const Service: FC<IProps> = ({ service }) => {
  return (
    <div className="pt-28 pb-40">
      <Grid container className="w-full px-16 mb-5">
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="flex justify-center items-center"
        >
          <Image
            src={
              service.imageName !== null
                ? `data:image/jpeg;base64,${service.imageName}`
                : "/images/Image 36.png"
            }
            width={500}
            height={300}
            alt="24HoursServices"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="flex justify-center items-center"
        >
          <p className="flex flex-col justify-center items-center gap-3">
            <span className="text-amber-400 text-[1.6rem] font-bold">
              {toPersianDigits(service.title)}
              {/* {toPersianDigits('خدمات 24 ساعته')} */}
            </span>
            <span className="font-bold text-[1.2rem]">
              {/* ما بالاترین سطح مراقبت را ارائه میدهیم */}
              {service.subTitle}
            </span>
            <span className="text-gray-500 text-[0.9rem] w-[25rem] text-center">
              {service.description}
              {/* از آنجا که لورم ایپسوم، شباهت زیادي به متن هاي واقعی دارد، طراحان
              معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتري یا کار فرما
              نشان دهند که قالب طراحی شده بعد از اینکه متن در آن قرار میگرد
              چگونه خواهد بود و فونت ها و .اندازه ها چگونه در نظر گرفته شده است */}
            </span>
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Service;
