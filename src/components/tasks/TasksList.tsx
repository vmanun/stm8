import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SerializedTask, Task } from "../../models/Task.d";
import { mockedTasks } from "../../mocks/data/tasks";

//TODO: Stylize
export default function TasksList() {
  const [tasks, setTasks]: [Task[], any] = useState([]);

  useEffect(() => {
    (async () => {
      const rawTasks: SerializedTask[] = mockedTasks;

      setTasks(rawTasks.map((serializedTask) => new Task(serializedTask)));
    })();
  }, []);

  return (
    <Box>
      {tasks.map((task) => (
        //TODO: Create a proper task component
        <div key={task.id}>
          <h1>{task.id}</h1>
          <h1>{task.link.toString()}</h1>
          <h1>{task.title}</h1>
        </div>
      ))}
    </Box>
  );
}
