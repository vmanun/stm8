import { Box } from "@chakra-ui/react";
import * as React from "react";
import TasksList from "./components/TasksList";
import TopNavBar from "./components/TopNavBar";

export const App = () => {
  return (
    <Box>
      <TopNavBar />
      <TasksList />
    </Box>
  );
};
