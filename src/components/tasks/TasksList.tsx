import React, { useEffect, useState } from "react";

import { Wrap, WrapItem } from "@chakra-ui/react";

import { SerializedTask, Task } from "../../models/Task";
import { mockedTasks } from "../../mocks/data/tasks";
import TaskCard from "./TaskCard";

//TODO: Stylize
export default function TasksList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const rawTasks: SerializedTask[] = mockedTasks;

      setTasks(rawTasks.map((serializedTask) => new Task(serializedTask)));
    })();
  }, []);

  return (
    <Wrap spacing="15px" align="center" justify="center">
      {tasks.map((task) => (
        <WrapItem key={task.id}>
          <TaskCard data={task} />
        </WrapItem>
      ))}
    </Wrap>
  );
}
