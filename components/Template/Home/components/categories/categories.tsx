import { Grid } from "@mui/material";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import Banner from "../banner/banner";

interface ICategory {
  icon: string;
  text: string;
  link: string;
}

const Categories = () => {
  const categoriesList: ICategory[] = [
    {
      icon: "/images/categoriesIcon/dermis.png",
      text: "پوست و مو زیبایی",
      link: "#",
    },
    {
      icon: "/images/categoriesIcon/kidney2.png",
      text: "کلیه مجاری ادراری",
      link: "#",
    },
    {
      icon: "/images/categoriesIcon/colon.png",
      text: "روده و گوارش",
      link: "#",
    },
    {
      icon: "/images/categoriesIcon/heart.png",
      text: "قلب و عروق",
      link: "#",
    },
    {
      icon: "/images/categoriesIcon/brainstorm.png",
      text: "مغز استخوان",
      link: "#",
    },
    {
      icon: "/images/categoriesIcon/lungs.png",
      text: "ریه و تنفس",
      link: "#",
    },
    {
      icon: "/images/categoriesIcon/liver.png",
      text: "کبد و گوارش",
      link: "#",
    },
    {
      icon: "/images/categoriesIcon/nasal.png",
      text: "دهان حلق بینی",
      link: "#",
    },
    {
      icon: "/images/categoriesIcon/syringe.png",
      text: "واکسیناسیون",
      link: "#",
    },
    {
      icon: "/images/categoriesIcon/ankle.png",
      text: "ارتوپدی",
      link: "#",
    },
    {
      icon: "/images/categoriesIcon/liver2.png",
      text: "کبد و گوارش",
      link: "#",
    },
    {
      icon: "/images/categoriesIcon/2371318.png",
      text: "سایر دسته ها",
      link: "#",
    },
  ];
  return (
    <div className="relative">
      <div className="lg:absolute -top-[8rem]">
        <Banner />
      </div>
      <Grid container className="w-full px-2 lg:px-16 pt-16 lg:pt-64 pb-36 bg-slate-100">
        <Grid item xs={12} className="!mb-10">
          <h1 className="text-center text-[1.5rem] font-bold">دسته بندی ها</h1>
        </Grid>
        <Grid item container spacing={2}>
          {categoriesList.map((item, index) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={3}
              key={index}
              className="p-0 hover:!-translate-y-2 transition-all"
            >
              <Link
                href={item.link}
                className="flex flex-col gap-3 justify-center items-center rounded-lg shadow-lg px-2 py-10 hover:!bg-gradient-to-r hover:!from-[#004fcd99] hover:!to-[#00DAF599] border text-center"
              >
                <Image src={item.icon} alt={item.text} height={50} width={50} />
                <p className="text-black">{item.text}</p>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Categories;
