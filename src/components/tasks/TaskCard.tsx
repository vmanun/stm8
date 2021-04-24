import React from "react";

import { Box } from "@chakra-ui/layout";

import { Task } from "../../types/Task";

interface ITaskProps extends React.ComponentProps<typeof Box> {
  data: Task;
}

export default function TaskCard({ data }: ITaskProps) {
  return (
    <Box w={{ sm: 250, lg: 350, xl: 500 }} height="100px" bg="blue.500">
      <h1>{data.id}</h1>
      <h1>{data.link.toString()}</h1>
      <h1>{data.title}</h1>
    </Box>
  );
}
