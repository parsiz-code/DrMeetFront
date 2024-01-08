import { useAppSelector } from 'src/hook'
const userTypesName = ['خطا', 'پزشک', 'بیمار', 'منشی', 'دستیار', 'ادمین', 'سوپر ادمین']

const useGetUserTypeName = () => {
  const userType = useAppSelector(state => state.user.userType)
  return userTypesName[+userType!]
}

export default useGetUserTypeName
