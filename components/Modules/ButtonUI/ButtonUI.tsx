import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "@nextui-org/react";
import { FC, ReactNode, useState } from "react";
import style from './../../../styles/ButtonUI.module.css';

interface IProps {
  title: string;
  link?: string;
  children?: ReactNode;
  className?: string;
  iconClassName?: string;
}

const ButtonUI: FC<IProps> = ({
  title,
  link,
  children,
  className,
  iconClassName = "rounded-full bg-white text-blue-500",
}) => {
  const [isHover, setIsHover] = useState(false);
  if (children) {
    return <button></button>;
  } else {
    if (link) {
      return (
        <button
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          className={`flex justify-center py-2 items-center rounded-xl ${style.hoverButtonUI} ${className}`}
        >
          <KeyboardArrowRightIcon
            className={`${iconClassName} rounded-full  ${
             isHover ? style.hoverIcon : "w-0"
            }`}
          />
          {title}
        </button>
      );
    } else {
      return (
        <Link
          href={link!}
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          className={`flex justify-center py-2 items-center rounded-xl ${style.hoverButtonUI} ${className}`}
        >
          <KeyboardArrowRightIcon
            className={`${iconClassName} rounded-full  ${
             isHover ? style.hoverIcon : "w-0"
            }`}
          />
          {title}
        </Link>
      );
    }
  }
};

export default ButtonUI;
