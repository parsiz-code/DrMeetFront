import { FC } from "react";
import { ToShamsiDate, toPersianDigits } from "@/helper/dateTimeHelper";
import { Grid } from "@mui/material";
import { Button, User } from "@nextui-org/react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

interface IProps {
  patientName?: string;
  commentDate?: string;
  status: number;
  context?: string;
  avatarPhoto?: string;
}

const CommentItem: FC<IProps> = ({
  patientName,
  commentDate,
  status,
  context,
  avatarPhoto,
}) => {
  return (
    <Grid item xs={12} className="bg-[#f3f3f3] rounded-xl py-7 px-6 my-4">
      <User
        name="فلان فلانی"
        description={toPersianDigits("1402/10/21")}
        avatarProps={{
          src: "https://i.pravatar.cc/150?img=59",
        }}
      />
      <div className="px-2 my-3">
        {status === 1 ? (
          <h6 className="text-green-700 mb-4">
            <ThumbUpOutlinedIcon className="" />
            <span className="mr-2">پزشک را توصیه میکنم</span>
          </h6>
        ) : (
          <h6 className="text-red-700 mb-4">
            <ThumbUpOutlinedIcon className="-scale-y-100" />
            <span className="mr-2">پزشک را توصیه نمیکنم</span>
          </h6>
        )}
        <p className="leading-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
      </div>
      <div className="text-left">
        <Button href="" className="bg-transparent text-gray-600">
            <FavoriteBorderOutlinedIcon className="text-[1.2rem]"/>
            <span className="">پسندیدن</span>
        </Button>
        <Button href="" className="bg-transparent text-gray-600">
            <ShareOutlinedIcon className="text-[1.2rem]"/>
            <span className="">اشتراک گذاری</span>
        </Button>
        <Button href="" className="bg-transparent text-gray-600">
            <ReplyOutlinedIcon className="text-[1.2rem]"/>
            <span className="">پاسخ</span>
        </Button>
      </div>
    </Grid>
  );
};

export default CommentItem;
