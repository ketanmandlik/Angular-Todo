import { Component } from "@angular/core";
import { Todo } from "./todo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "lcoangular";
  todoValue: string;
  list: Todo[];
  // date = new Date();
  // name = "Ketan Mandlik";

  constructor() {
    // console.log("Constructor called");
    // this.doSomething("Ketan");
    // this.doSomething(this.name);
  }
  ngOnInit() {
    this.list = [];
    this.todoValue = "";
  }

  addItem() {
    if (this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false,
      };
      console.log(this.todoValue);
      this.list.push(newItem);
      console.log(this.list);
    }
    this.todoValue = "";
  }

  deleteItem(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }

  doSomething(val: string): void {
    console.log(val);
  }
}
