import PlaceIcon from "@mui/icons-material/Place";

const DoctorAddress = () => {
  return (
    <div className="my-4">
      <div className="p-5 bg-[#ffa8a8] rounded-xl flex justify-around items-center gap-4">
        <div className="bg-[#e4e4e4] rounded-full p-2">
          <PlaceIcon className="text-[2rem]" />
        </div>
        <p className="">
          استان تهران، تجریش، و، ۶، تهران،خیابان دکتر شریعتی،ضلع شمالی مترو
          قیطریه،بلوار صبا،خیابان خلیلی،پلاک ۱۹۵،طبقه سوم،واحد ۵
        </p>
      </div>
    </div>
  );
};

export default DoctorAddress;
