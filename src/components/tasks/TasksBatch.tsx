import React from "react";

import { Box, Heading, Wrap, WrapItem } from "@chakra-ui/react";

import { ISerializedTask, ITaskBatch, Task } from "../../types/Task";
import TaskCard from "./TaskCard";
import { ScopedStyleSheet } from "../../declarations";

const styles: ScopedStyleSheet = {
  root: {
    background: "white",
    borderRadius: "5px",
    padding: "10px 30px",
    margin: 35,
  },
};

export default function TasksBatch({
  title,
  tasks,
}: ITaskBatch<ISerializedTask>) {
  return (
    <Box style={styles.root}>
      <Heading color="gray.800">{title}</Heading>
      <Wrap spacing="15px" align="center" justify="center">
        {tasks.map((task) => (
          <WrapItem key={task.id}>
            <TaskCard data={new Task(task)} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}
