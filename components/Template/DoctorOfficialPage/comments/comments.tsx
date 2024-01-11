import { Grid } from "@mui/material";
import CommentItem from "./commentItem";
import AddComment from "./addComment";

const DoctorComments = () => {
  return (
    <div>
      <Grid container className="py-5" rowSpacing={3}>
        <CommentItem status={0} />
        <CommentItem status={1} />
        <AddComment/>
      </Grid>
    </div>
  );
};

export default DoctorComments;
