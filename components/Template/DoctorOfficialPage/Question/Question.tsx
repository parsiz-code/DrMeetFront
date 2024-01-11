import { Grid } from "@mui/material";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import React from "react";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";

function QuestionDoctor() {
  return (
    <div>
      <div className="my-5">
        <h2 className="text-center mb-5 font-bold">سوالات متداول</h2>
        <div className="px-2 lg:px-20 py-5">
          <Accordion isCompact>
            <AccordionItem
              key="1"
              title="سوال متداول شماره یک"
              className="text-[#005EBD]"
              classNames={{
                title: "text-[#005EBD]",
                titleWrapper: "py-2",
                content: "pr-10",
              }}
              startContent={
                <span className="p-2 mb-1 rounded-full bg-[#33e1f7]">
                  <QuestionMarkOutlinedIcon className="text-[#005ebd]" />
                </span>
              }
            >
              <p className="px-3 pb-4">
                اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به
                متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.{" "}
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              title="سوال متداول شماره دو"
              className="text-[#005EBD]"
              classNames={{
                title: "text-[#005EBD]",
                titleWrapper: "py-2",
                content: "pr-10",
              }}
              startContent={
                <span className="p-2 mb-1 rounded-full bg-[#33e1f7]">
                  <QuestionMarkOutlinedIcon className="text-[#005ebd]" />
                </span>
              }
            >
              <p className="px-3 pb-4">
                اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به
                متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.{" "}
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              title="سوال متداول شماره سه"
              className="text-[#005EBD]"
              classNames={{
                title: "text-[#005EBD]",
                titleWrapper: "py-2",
                content: "pr-10",
              }}
              startContent={
                <span className="p-2 mb-1 rounded-full bg-[#33e1f7]">
                  <QuestionMarkOutlinedIcon className="text-[#005ebd]" />
                </span>
              }
            >
              <p className="px-3 pb-4">
                اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به
                متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند.{" "}
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default QuestionDoctor;
