import { createElementsInElement } from "./utilities";
import addTask from "./Task";

export default function createColumn(
  columnTitle = "title",
  tasksTitles = null
) {
  const column = document.createElement("div");
  const title = document.createElement("textarea");
  const columnTasks = document.createElement("ul");

  const addTaskButton = createElementsInElement(
    [{ tag: "i", classNames: ["fas", "fa-plus"] }],
    "button"
  );

  // add classes
  column.dataset.columnName = columnTitle;
  column.classList.add("column");
  title.placeholder = columnTitle;
  title.classList.add("column-header");
  columnTasks.classList.add("column-tasks");
  addTaskButton.classList.add("addTask");

  // append
  column.appendChild(title);
  column.appendChild(columnTasks);
  column.appendChild(addTaskButton);

  if (tasksTitles !== null) {
    tasksTitles.forEach((taskTitle) => {
      const task = addTask(taskTitle);
      columnTasks.appendChild(task);
    });
  }

  return column.cloneNode(true);
}