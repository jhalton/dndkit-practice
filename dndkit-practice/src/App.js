import "./App.css";
import React from "react";
import { DndContext } from "@dnd-kit/core";

import Draggable from "./Components/Draggable";
import Droppable from "./Components/Droppable";

function App() {
  return (
    <div className="App">
      <DndContext>
        <Draggable />
        <Droppable />
      </DndContext>
    </div>
  );
}

export default App;
