import { Grid } from "@mui/material"
import ServiceItem from "./serviceItem"

const OurServices = () => {
    return(
        <div>
            <Grid container className="py-8 px-3">
                <Grid item xs={12} className="mb-4 w-full text-center">
                    <h2 className="font-bold">خدمات قابل ارائه</h2>
                </Grid>
                <Grid item xs={12} className="flex justify-center items-center gap-2 flex-wrap">
                    <ServiceItem title="ویزیت"/>
                    <ServiceItem title="نوار مغز"/>
                    <ServiceItem title="تست ورزش"/>
                    <ServiceItem title="ویزیت"/>
                    <ServiceItem title="ویزیت"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default OurServices