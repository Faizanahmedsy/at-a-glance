import React from "react";
import { Checkbox, Link, User, Chip, cn, Button } from "@nextui-org/react";

export const CustomCheckbox = ({ user, statusColor, value, handleDelete }) => {
  return (
    <Checkbox
      aria-label={user.name}
      classNames={{
        base: cn(
          "inline-flex max-w-md w-full bg-content1 m-0",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
        label: "w-full",
      }}
      value={value}
    >
      <div className="w-full flex justify-between gap-2">
        <div className="flex flex-col">
          <span className="text-default-900 font-semibold">{user.name}</span>
          <span className="text-default-500 ">{user.name}</span>
        </div>
        {/* <div className="flex flex-col items-end gap-1">
          <span className="text-tiny text-default-500">{user.role}</span>
          <Chip color={statusColor} size="sm" variant="flat">
            {user.status}
          </Chip>
        </div> */}
        <Button
          color="danger"
          size="small"
          auto
          onClick={() => handleDelete(user.id)}
        >
          Delete
        </Button>
      </div>
    </Checkbox>
  );
};
