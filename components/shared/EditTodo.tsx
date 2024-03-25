"use client";

import { FC, useState } from "react";
import { BiEdit } from "react-icons/bi";

import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";

import { Todo } from "@/types/Todo";

import { edit } from "@/app/actions/todoActions";

export interface EditTodoProps {
  todo: Todo;
}

const EditTodo: FC<EditTodoProps> = ({ todo }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    if (todo.isCompleted) return;
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} actionButton>
        <BiEdit />
      </Button>
      {editTodo ? (
        <Form onSubmit={handleSubmit} action={edit}>
          <Input name="inputId" type="hidden" value={todo.id} />
          <div className="flex justify-center">
            <Input name="newTitle" type="text" placeholder="Edit Todo..." />
            <Button type="submit">Save</Button>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
