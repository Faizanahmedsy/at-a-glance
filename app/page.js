"use client";
import { CustomCheckbox } from "@/components/CustomCheckbox";
import AddTaskModal from "@/components/Modals/AddTaskModal";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CheckboxGroup,
  Chip,
  CircularProgress,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [groupSelected, setGroupSelected] = useState([]);

  const [task, setTask] = useState([
    {
      id: uuidv4(),
      name: "Task 1",
      description: "This is task 1",
      status: "Active",
      statusColor: "secondary",
      category: "Work",
    },
    {
      id: uuidv4(),
      name: "Task 2",
      description: "This is task 2",
      status: "pending",
      statusColor: "warning",
      category: "Personal",
    },
    {
      id: uuidv4(),
      name: "Task 3",
      description: "This is task 3",
      status: "apex",
      statusColor: "danger",
      category: "Work",
    },
  ]);

  const handleAddTask = (newTask) => {
    setTask([...task, newTask]);
  };

  const handleDelete = (id) => {
    console.log(id);

    const updatedTask = task.filter((task) => task.id !== id);

    setTask(updatedTask);
  };

  console.log("task", task);

  return (
    <main className="min-h-screen grid grid-cols-3 py-14">
      <div className="  px-14">
        <div className="flex text-center font-bold gap-4 justify-center">
          <Avatar
            isBordered
            radius="lg"
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          />
          <h2 className="text-3xl">Faizans Todos</h2>
        </div>

        <Divider className="my-4 w-full bg-zinc-700" />

        <Button
          color="primary"
          fullWidth
          onPress={onOpen}
          endContent={
            <img src="https://api.iconify.design/lets-icons/add-duotone.svg?width=25&height=25" />
          }
        >
          Add a task
        </Button>
        <div className="flex flex-col gap-1 w-full mt-4">
          <CheckboxGroup
            aria-label="Checkbox group example"
            value={groupSelected}
            onChange={setGroupSelected}
            classNames={{
              base: "w-full",
            }}
          >
            {task.map((task, index) => (
              <CustomCheckbox
                handleDelete={handleDelete}
                key={task.id}
                value={index}
                user={{
                  name: task.name,
                  avatar:
                    "https://avatars.githubusercontent.com/u/30373425?v=4",
                  username: "jrgarciadev",
                  url: "https://twitter.com/jrgarciadev",
                  role: task.category,
                  status: task.status,
                  id: task.id,
                }}
                statusColor={task.statusColor}
              />
            ))}
            {/* <CustomCheckbox
              value="junior"
              user={{
                name: "Junior Garcia",
                avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
                username: "jrgarciadev",
                url: "https://twitter.com/jrgarciadev",
                role: "Software Developer",
                status: "Active",
              }}
              statusColor="secondary"
            />
            <CustomCheckbox
              value="johndoe"
              user={{
                name: "John Doe",
                avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
                username: "johndoe",
                url: "#",
                role: "Product Designer",
                status: "Vacation",
              }}
              statusColor="warning"
            />
            <CustomCheckbox
              value="zoeylang"
              user={{
                name: "Zoey Lang",
                avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
                username: "zoeylang",
                url: "#",
                role: "Technical Writer",
                status: "Out of office",
              }}
              statusColor="danger"
            />
            <CustomCheckbox
              value="william"
              user={{
                name: "William Howard",
                avatar: "https://i.pravatar.cc/300?u=a048581f4e29026701d",
                username: "william",
                url: "#",
                role: "Sales Manager",
                status: "Active",
              }}
              statusColor="secondary"
            /> */}
          </CheckboxGroup>
          <p className="mt-4 ml-1 text-default-500">
            Selected: {groupSelected.join(", ")}
          </p>
        </div>
      </div>
      <div>
        <Card
          className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500"
          aria-label="card"
        >
          <CardBody className="justify-center items-center pb-0">
            <CircularProgress
              classNames={{
                svg: "w-36 h-36 drop-shadow-md",
                indicator: "stroke-white",
                track: "stroke-white/10",
                value: "text-3xl font-semibold text-white",
              }}
              value={70}
              strokeWidth={4}
              showValueLabel={true}
            />
          </CardBody>
          <CardFooter className="justify-center items-center pt-0">
            <Chip
              classNames={{
                base: "border-1 border-white/30",
                content: "text-white/90 text-small font-semibold",
              }}
              variant="bordered"
            >
              2800 Data points
            </Chip>
          </CardFooter>
        </Card>
      </div>
      {/* <div>Faizan</div> */}

      <AddTaskModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onOpen={onOpen}
        handleAddTask={handleAddTask}
      />
    </main>
  );
}
