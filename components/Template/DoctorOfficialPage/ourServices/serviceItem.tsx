import { Button } from "@nextui-org/react"
import { FC } from "react"

interface IProps {
    title: string
}
const ServiceItem: FC<IProps> = ({title}) => {
    return (
        <Button className="bg-[#8cc6ee] px-10">{title}</Button>
    )
}

export default ServiceItem