"use client";
import AddTaskModal from "@/components/Modals/AddTaskModal";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
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

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <main className="min-h-screen grid grid-cols-3 py-14">
      <div className="border-red-300 box-border  px-14">
        <div className="flex text-center font-bold gap-4 justify-center">
          <Avatar
            isBordered
            radius="lg"
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          />
          <h2 className="text-3xl">Faizans Todos</h2>
        </div>

        <Divider className="my-4 w-full bg-cyan-200" />

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
      </div>
      <div>
        <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
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
      />
    </main>
  );
}
