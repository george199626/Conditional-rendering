const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTasksValue: "",
      taskListIsVisible: true,
    };
  },

  computed: {
    buttonText() {
      return this.taskListIsVisible ? "Hide List" : "Show List";
    },
  },

  methods: {
    addTasks() {
      this.tasks.push(this.enteredTasksValue);
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
});

app.mount("#assignment");
