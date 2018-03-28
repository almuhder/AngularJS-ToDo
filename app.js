// app.js
angular.module('app', []).component('todoList', {
  // TODO
  controller: function () {
      this.todos = [
          'Update the front end',
          'Fix the login problem',
          'Get the last batch',
      ];
      this.addToDo = () => {
          this.todos.push(this.newToDo);
          console.log(this.newToDo);
          this.newToDo = '';
        };

      this.removeToDo = (index) => {
            console.log(index);
            this.todos.splice(index, 1);
            // this.todos.pop();
          };

      this.editToDo = ($index) => {
          console.log(index);

        };
    },

  template: `
      <h1> To Do List</h1>
      <div class="form-group row">
        <input class="form-control" ng-model="$ctrl.newToDo">
        <button class="btn btn-primary" ng-click="$ctrl.addToDo()"> Add </button>
      </div>

      <ul>
          <li ng-repeat="todo in $ctrl.todos track by $index" ng-click="$ctrl.removeToDo($index)"> {{todo}}</li>
      </ul>
      <hr />
      <pre>{{$ctrl.todos | json}} </pre>
    `,
});
