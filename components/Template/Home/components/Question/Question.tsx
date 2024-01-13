import { Grid } from "@mui/material";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import React from "react";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";

function Question() {
  return (
    <div>
      <Grid
        container
        className="w-full px-16 pt-24 pb-80 bg-[#efefef]"
        columnSpacing={3}
      >
        <Grid item xs={12} sm={12} md={5.5} lg={5.5} className="">
          <h2 className="text-[#007dfe] text-[1rem]">سوالات متداول</h2>
          <h2 className="text-[#007dfe] text-[1.5rem] py-2">
            اغلب
            <span className="text-[#33e1f7] mr-1">سوالات پرسیده شده</span>
          </h2>
          <p className="mb-8 md:w-96">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن
            های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا
            طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که
            برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و
          </p>
          <Button href="#" className="py-3 px-10 bg-[#007dfe] text-white">
            به ما بپیوندید
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6.5} lg={6.5} className="mt-10 lg:mt-0">
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
        </Grid>
      </Grid>
    </div>
  );
}

export default Question;
