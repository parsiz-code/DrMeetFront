import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { FC } from "react";

interface IProps {
  prevRoutes: { path: string; title: string }[];
  currentRoute: string;
}

const Breadcrumb: FC<IProps> = ({ prevRoutes, currentRoute }) => {
  return (
    <Breadcrumbs
      variant="solid"
      separator="/"
      className="!mb-3 py-2 text-[0.8rem]"
      itemClasses={{
        separator: "px-2",
      }}
    >
      {prevRoutes?.map((route, index) => (
        <BreadcrumbItem key={index} href={route.path}>
          {route.title}
        </BreadcrumbItem>
      ))}
      <BreadcrumbItem color="primary">{currentRoute}</BreadcrumbItem>
    </Breadcrumbs>
  );
};
export default Breadcrumb;
