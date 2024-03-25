import { FC } from "react";

import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";

import { create } from "@/app/actions/todoActions";

export interface AddTodoProps {}

const AddTodo: FC<AddTodoProps> = () => {
  return (
    <Form className="w-1/2 m-auto" action={create}>
      <div className="flex">
        <Input name="input" type="text" placeholder="Add Todo..." />
        <Button type="submit">Add</Button>
      </div>
    </Form>
  );
};

export default AddTodo;
