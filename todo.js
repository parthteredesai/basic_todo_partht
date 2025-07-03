let addbtn = document.querySelector("#addTaskBtn");
let taskinp = document.querySelector("#taskInput");
let tasklist = document.querySelector("#taskList");

// addbtn.addEventListener("click", () => {
//   console.log("btn was clicked");
//   console.dir(taskinp.value);
// });

//  below defined what should happen if addbtn is pressed or if 'ENTER' is pressed
//  while  typing in input

addbtn.addEventListener("click", addtask);
taskinp.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addtask();
  }
});

function addtask() {
  let task = taskinp.value.trim();
  console.log("pressed");
  if (task === "") {
    alert("PLEASE ENTER TASK");
    return;
  }

  let li = document.createElement("li");
  li.className = "task-item";
  let span = document.createElement("span");
  span.innerText = task;
  span.className = "spanny";
  let actionsDiv = document.createElement("div");
  actionsDiv.className = "task-actions";
  let actbtn = document.createElement("button");
  actbtn.innerText = "Complete";
  actbtn.className = "complete-btn";
  actbtn.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
  let editbtn = document.createElement("button");
  editbtn.innerText = "edit";
  editbtn.className = "edit-btn";
  editbtn.addEventListener("click", function () {
    if (editbtn.innerText === "edit") {
      let newinp = document.createElement("input");
      newinp.type = "text";
      newinp.value = span.innerText;
      newinp.className = "edit-inp";
      li.replaceChild(newinp, span);
      editbtn.innerText = "save";
    } else {
      let newtask = li.querySelector("input").value.trim();
      if (newtask === "") {
        alert("Task cannot be empty");
      }
      span.innerText = newtask;
      li.replaceChild(span, li.querySelector("input"));
      editbtn.innerText = "edit";
    }
  });
  actionsDiv.appendChild(actbtn);
  actionsDiv.appendChild(editbtn);
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actionsDiv);
  tasklist.appendChild(li);
  taskinp.value = "";
}
