import moment from "moment";
import { StaticDataServices } from "src/services/StaticData";

export const getServerDate = async () => {

    const { getDateTime } = StaticDataServices();
    const { data } = await getDateTime();
    if (!data) return new Date();
    const dateTime = `${data.date},${data.time}`;
    // var m = moment(dateTime, 'YYYY-MM-DD,hh:mm:ss');
    // const result = m.toDate();
    const result = new Date(dateTime.replaceAll('-', '/'))
    return result;
}

export const dateToQueryString = (date: Date): string => {

    const result = moment(date).format('YYYY-MM-DD');
    return result
}