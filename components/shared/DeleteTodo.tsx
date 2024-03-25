"use client";

import { FC } from "react";
import { BsFillTrashFill } from "react-icons/bs";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Form from "../ui/Form";

import { deleteTodo } from "@/app/actions/todoActions";

import { Todo } from "@/types/Todo";

export interface DeleteTodoProps {
  todo: Todo;
}

const DeleteTodo: FC<DeleteTodoProps> = ({ todo }) => {
  return (
    <Form action={deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button actionButton>
        <BsFillTrashFill />
      </Button>
    </Form>
  );
};

export default DeleteTodo;
