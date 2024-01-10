import { Box, Grid } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";

const OptionsLine = () => {
  const optionsList = [
    {
      icon: <SentimentSatisfiedAltIcon className="text-white text-[1.5rem]" />,
      title: "تضمین بازگشت وجه و رضایت کاربران",
    },
    {
      icon: <AccessTimeIcon className="text-white text-[1.5rem]" />,
      title: "صرفه جویی در زمان و هزینه",
    },
    {
      icon: <PeopleIcon className="text-white text-[1.5rem]" />,
      title: "مشاوره با پزشکان متعهد",
    },
  ];
  return (
    <div className="">
      <Grid container className="w-full px-2 lg:px-16">
        {/* <Grid item xs={12} className="mb-10">
          <h1 className="text-center text-[1.5rem] font-bold">خدمات کلینیک</h1>
        </Grid> */}
        <Grid
          item
          container
          className="w-full text-center "
          justifyContent={"space-between"}
          alignItems={"center"}
          rowSpacing={2}
        >
          {optionsList.map((item, index) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={index} className="px-4">
              <Box className="flex justify-start items-center rounded-[2rem] p-4 bg-[#005EBD]">
                <span className="ml-10 bg-[#00DAF5] p-3 rounded-full">
                  {item.icon}
                </span>
                <span className="text-white">{item.title}</span>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default OptionsLine;
