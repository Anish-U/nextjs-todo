import { FC } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";

import { TodoType } from "@/types/Todo";

import { changeStatus } from "@/app/actions/todoActions";

export interface ChangeTodoProps {
  todo: TodoType;
}

const ChangeTodo: FC<ChangeTodoProps> = ({ todo }) => {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button actionButton type="submit">
        <AiOutlineCheckCircle />
      </Button>
    </Form>
  );
};

export default ChangeTodo;
