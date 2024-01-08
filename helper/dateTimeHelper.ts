import moment from 'jalali-moment'
import { toPersianDigit } from './stringHelper'

export const ToShamsiDate = (value: string | Date, mode: 'date' | 'time' | 'date-time' = 'date'): string => {
  if (mode === 'date') {
    return toPersianDigit( new Date(value).toLocaleDateString('fa-IR-u-nu-latn',{year:'numeric',month:'2-digit',day:'2-digit'}));
  }

  if (mode === 'time') {
    return toPersianDigit(new Date(value).toLocaleTimeString('fa-IR-u-nu-latn'))
  }

  return`${toPersianDigit(new Date(value).toLocaleTimeString('fa-IR-u-nu-latn'))} - ${toPersianDigit( new Date(value).toLocaleDateString('fa-IR-u-nu-latn',{year:'numeric',month:'2-digit',day:'2-digit'}))}`
}

export const Today = (): string => {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0')
  var yyyy = today.getUTCFullYear()
  return yyyy + '-' + mm + '-' + dd
}

export const toPersianDayWeek = (date: Date) => date.toLocaleDateString('fa-IR', { weekday: 'long', day: '2-digit', month: 'long' })

export const IsDatePast = (date: string): boolean => Date.parse(date) - Date.parse(Today()) < 0

export const IsoStringFormat = (date: string | Date) => new Date(date).toISOString().split('T')[0]

export const toPersianDigits = (str: string | number) => {
  const id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

  const valueStr = `${str}`
  const persianStr = valueStr.replace(/[0-9]/g, w => id[+w])

  return persianStr
}

export const calculateAge = (birthdate: string | Date) => {
  const now = new Date()
  const birth = new Date(birthdate)
  let age = now.getFullYear() - birth.getFullYear()
  const monthDiff = now.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age--
  }
  return age
}

export const monthsSinceBirth = (birthdate: string | Date, date: string | Date) => {
  const birth = new Date(birthdate)
  const event = new Date(date)
  let months = (event.getFullYear() - birth.getFullYear()) * 12
  months -= birth.getMonth() + 1
  months += event.getMonth() + 1
  if (event.getDate() < birth.getDate()) {
    months--
  }
  return months
}

export const toPersianDateSalamat = (date: Date | string) => {
  const inDate = new Date(date)
  const persianDate = inDate.toLocaleString('fa-IR-u-nu-latn', { year: 'numeric', month: '2-digit', day: '2-digit' })
  const splitDate = persianDate.split('/')
  const str = splitDate.join('')

  return str
}

export const toPersianDateWithDigits = (date: Date | string): string => {
  const inputDate = new Date(date)
  const persianDateFormat = inputDate.toLocaleDateString('fa-IR-u-nu-latn', { year: 'numeric', month: '2-digit', day: '2-digit' })

  return toPersianDigits(persianDateFormat)
}

export const twoDigitTime = (time: string | number, lang?: 'fa' | 'en') => {
  const value = `${time}`.length === 1 ? `0${time}` : `${time}`
  if (!lang) return toPersianDigits(value)
  return lang === 'fa' ? toPersianDigits(value) : value
}

export const compareTime = (targetTime: string) => {
  // ایجاد یک نمونه از تاریخ و زمان فعلی
  const currentTime = new Date()

  // تبدیل زمان هدف به تاریخ و زمان
  const [targetHour, targetMinute] = targetTime.split(':')
  const targetDate = new Date()
  targetDate.setHours(+targetHour)
  targetDate.setMinutes(+targetMinute)

  // مقایسه زمان هدف با زمان فعلی و برگرداندن مقدار منطقی
  return targetDate > currentTime
}

export const addDays = (date: Date, days: number) => {
  date.setDate(date.getDate() + days)
  return date
}

export const firstDayOfmonthToMiladi = () => {
  const toDay = ToShamsiDate(new Date())
  const [year, month, day] = toDay.split('/')
  return moment.from(`${year}/${month}/01`, 'fa', 'YYYY/MM/DD').locale('en').format('MM/DD/YYYY')
}

export const getDaysBetweenDates = (startDate: Date | string, endDate: Date | string) => {
  const days = []
  let currentDate = new Date(startDate)
  const end = new Date(endDate)

  while (currentDate <= end) {
    const curr = new Date(currentDate)
    days.push(curr.toISOString())
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return days
}


