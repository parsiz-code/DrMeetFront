import { Grid } from "@mui/material";
import { Button, Textarea } from "@nextui-org/react";
import TelegramIcon from '@mui/icons-material/Telegram';

const AddComment = () => {
  return (
    <Grid item xs={12} className="my-4">
      <h2 className="font-bold">
        *-لطفا تجربه درمان خود را از ویزیت پزشک بنویسید:
      </h2>
      <h2 className="text-gray-600">
        کیفیت درمان، مدت زمان درمان، دارو های مصرفی و نحوه برخورد پزشک
      </h2>
      <Textarea placeholder="اینجا بنویسید" className="mt-5 mb-4" />
      <div className="text-left">
        <Button className="text-white bg-[#27c1a9]">
            <span className="">ارسال نظر</span>
            <TelegramIcon/>
        </Button>
      </div>
    </Grid>
  );
};

export default AddComment;
