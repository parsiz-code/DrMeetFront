import { FC, useEffect, useState } from "react";
import MenubarItems from "./menubarItems";
import Link from "next/link";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import {
  Avatar,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

type State = {
  common: {
    darkTheme: boolean;
  };
};

interface IProps {
  lowOrderAccess: number;
}
const DashboardMenubar: FC<IProps> = ({ lowOrderAccess }) => {
  const [isDoctor, setIsDoctor] = useState(false);
  const { darkTheme } = useSelector((state: State) => state.common);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    if (lowOrderAccess === 1) {
      setIsDoctor(false);
    } else if (lowOrderAccess === 2) {
      setIsDoctor(true);
    }
  }, [lowOrderAccess]);

  return (
    <div>
      <div
        className={`w-full mb-3 py-2 border-b-1 border-gray-400 hidden xl:block ${
          darkTheme ? "darkElem" : "bg-white"
        } z-50`}
      >
        <div className="flex items-center gap-5">
          {!isDoctor ? (
            <>
              {MenubarItems.patient.map((item, index) => (
                <Link
                  href={`${item.route}`}
                  className={`flex !items-center gap-2 py-3 px-2 hover:bg-[#f3f4f4] linkHover rounded-lg`}
                >
                  {item.icon}
                  <h6
                    className={`${
                      darkTheme ? "text-gray-200" : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </h6>
                </Link>
              ))}
            </>
          ) : (
            <>
              {MenubarItems.doctor.map((item, index) => (
                <Link
                  href={`${item.route}`}
                  className={`flex !items-center gap-2 py-3 px-2 hover:bg-[#f3f4f4] linkHover rounded-lg`}
                >
                  {item.icon}
                  <h6
                    className={`${
                      darkTheme ? "text-gray-200" : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </h6>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
      <div
        className={`lg:hidden fixed bottom-0 right-0 left-0 w-full py-3 px-16 border-t-1 border-gray-400 rounded-t-xl ${
          darkTheme ? "darkElem" : "bg-white"
        } z-50`}
      >
        <div className="flex justify-between items-center">
          <div className="">
            <Link
              href="/dashboard"
              className="bg-transparent h-full w-full flex justify-center items-center"
            >
              <HomeIcon
                className={`${
                  darkTheme ? "text-gray-200" : "text-gray-500"
                } text-[2rem]`}
              />
            </Link>
          </div>
          <div className="">
            <Button
              className="bg-transparent h-full w-full"
              disableAnimation
              onClick={() => setShowMenu(!showMenu)}
            >
              <Image src="/images/menubarLogo.png" width={50} />
            </Button>
          </div>
          <div className="">
            <Link href="/dashboard/profile">
              <Avatar size="sm" />
            </Link>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showMenu}
        onOpenChange={setShowMenu}
        placement="bottom"
        backdrop="blur"
        classNames={{
          base: darkTheme ? "darkBG border border-white" : "text-gray-500",
          closeButton: "hidden",
        }}
        hideCloseButton={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader
                className={`${
                  darkTheme ? "text-white" : "text-black"
                } flex justify-center`}
              >
                منوها
              </ModalHeader>
              <ModalBody>
                {!isDoctor ? (
                  <>
                    {MenubarItems.patient.map((item, index) => (
                      <Link
                        href={`${item.route}`}
                        className={`flex !items-center gap-2 py-3 px-2 hover:bg-[#f3f4f4] linkHover rounded-lg`}
                      >
                        {item.icon}
                        <h6
                          className={`${
                            darkTheme ? "text-gray-200" : "text-gray-500"
                          }`}
                        >
                          {item.title}
                        </h6>
                      </Link>
                    ))}
                  </>
                ) : (
                  <>
                    {MenubarItems.doctor.map((item, index) => (
                      <Link
                        href={`${item.route}`}
                        className={`flex !items-center gap-2 py-3 px-2 hover:bg-[#f3f4f4] linkHover rounded-lg`}
                      >
                        {item.icon}
                        <h6
                          className={`${
                            darkTheme ? "text-gray-200" : "text-gray-500"
                          }`}
                        >
                          {item.title}
                        </h6>
                      </Link>
                    ))}
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  بستن
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DashboardMenubar;
