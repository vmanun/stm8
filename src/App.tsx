import { Box } from "@chakra-ui/react";
import * as React from "react";
import TasksList from "./components/tasks/TasksList";
import TopNavBar from "./components/ui-components/TopNavBar";

export const App = () => {
  return (
    <Box>
      <TopNavBar />
      <TasksList />
    </Box>
  );
};
