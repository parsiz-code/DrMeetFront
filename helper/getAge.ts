export function getAge(date: string | Date) {
    const birthDate = +new Date(date);
    return ~~((Date.now() - birthDate) / (31557600000));
}

export const getFullAge = (dateString: string | Date) => {

    const now = new Date();

    const yearNow = now.getFullYear();
    const monthNow = now.getMonth();
    const dateNow = now.getDate();

    const dob = new Date(dateString);

    const yearDob = dob.getFullYear();
    const monthDob = dob.getMonth();
    const dateDob = dob.getDate();
    let age
    let ageString = "";
    let yearString = "";
    let monthString = "";
    let dayString = "";


    let yearAge = yearNow - yearDob;

    let monthAge;
    if (monthNow >= monthDob)
        monthAge = monthNow - monthDob;
    else {
        yearAge--;
        monthAge = 12 + monthNow - monthDob;
    }

    let dateAge;
    if (dateNow >= dateDob)
        dateAge = dateNow - dateDob;
    else {
        monthAge--;
        dateAge = 31 + dateNow - dateDob;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }

    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
    };

    yearString = " سال";
    monthString = " ماه";
    dayString = " روز";


    if ((age.years > 0) && (age.months > 0) && (age.days > 0))
        ageString = age.years + yearString + " و " + age.months + monthString + " و " + age.days + dayString;
    else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
        ageString = age.days + dayString;
    else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
        ageString = age.years + yearString + " ( سالروز تولد )";
    else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
        ageString = age.years + yearString + " و " + age.months + monthString;
    else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
        ageString = age.months + monthString + " و " + age.days + dayString;
    else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
        ageString = age.years + yearString + " و " + age.days + dayString;
    else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
        ageString = age.months + monthString;
    else if ((age.years == 0) && (age.months == 0) && (age.days == 0))
        ageString = 'امروز متولد شده است';
    else ageString = "تاریخ تولد اشتباه است";

    return ageString;

}