import { FC } from "react";
import { prisma } from "@/utils/prisma";

import AddTodo from "@/components/shared/AddTodo";
import Todo from "@/components/shared/Todo";

export interface HomePageProps {}

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

const HomePage: FC<HomePageProps> = async () => {
  const data = await getData();

  return (
    <main className="w-screen py-20 flex flex-col justify-center items-center">
      <span className="text-3xl mb-5 font-extrabold uppercase">
        NextJS Todo App
      </span>
      <div className="flex justify-center flex-col items-center w-[1000px]">
        <AddTodo />
        <div className="flex flex-col gap-5 items-end justify-center mt-10 w-full">
          {data.map((todo, id) => (
            <div className="w-full" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
