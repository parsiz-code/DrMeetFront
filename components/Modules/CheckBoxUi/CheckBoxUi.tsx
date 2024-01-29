import React from "react";
import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";

const checkbox = tv({
  slots: {
    base: "bg-gray-200 hover:bg-gray-200 text-sm shadow",
    content: "text-black !text-[0.7rem]",
  },
  variants: {
    isSelected: {
      true: {
        base: "bg-primary hover:bg-primary-500 hover:border-primary-500 shadow",
        content: "text-primary-foreground text-[0.7rem]",
      },
    },
    isFocusVisible: {
      true: {
        base: "outline-none shadow",
      },
    },
  },
});

export const CustomCheckbox = (props) => {
  const {
    children,
    isSelected,
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    ...props,
  });

  const styles = checkbox({ isSelected, isFocusVisible });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        className=""
        color="primary"
        // startContent={isSelected ? <CheckIcon className="ml-1" /> : null}
        variant="flat"
        radius="none"
        {...getLabelProps()}
      >
        {children ? children : isSelected ? "Enabled" : "Disabled"}
      </Chip>
    </label>
  );
};

export const CheckIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
