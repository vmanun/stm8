import React, { useState, useEffect } from "react";

import { Box } from "@chakra-ui/react";

import TasksBatch from "./components/tasks/TasksBatch";
import TopNavBar from "./components/ui-components/TopNavBar";
import { ISerializedTask, ITaskBatch, Task } from "./types/Task";
import { mockedTasks } from "./mocks/data/tasks";

export const App = () => {
  const [taskBatches, setTaskBatches] = useState<ITaskBatch<ISerializedTask>[]>(
    []
  );

  useEffect(() => {
    (async () => {
      setTaskBatches(mockedTasks);
    })();
  }, []);

  return (
    <Box>
      <TopNavBar />
      {taskBatches.map((tasksBatch) => (
        <TasksBatch {...tasksBatch} />
      ))}
    </Box>
  );
};
