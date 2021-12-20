<template>
  <div class="wrapper">
    <h2>Tasks</h2>
    <div
         v-if="tasks != []"
      >
        <div class="tasks"
          v-for="task in tasks"
          :key="task.id"
        >
          <task :task="task" />
        </div>
    </div>
      <div
        v-else
      >
        <h5>No tasks to show.</h5>
      </div>


    <!-- <edit-input @submitButton="addTask" 
      :title="newTitle"
      :description="newDesc"
      :post="post"
    /> -->

  <form @submit.prevent="addTask">
    <input
      type="text"
      :placeholder="title"
      name="value"
      v-model="newTitle"
    />
    <input
      type="text"
      :placeholder="description"
      name="description"
      v-model="newDesc"
    />
    <br />
    <button
      type="submit"
    >
      Submit
    </button>
  </form>
  </div>
</template>

<script>
import Task from './Task.vue'
import EditInput from './EditInput.vue'

export default {
  components: {
    Task,
    EditInput
  },

  data() {
    return {
      tasks: [],
      newTitle: '',
      newDesc: ''
    }
  },

  // // fetch tasks from local storage
  // or initialize empty storage
  mounted() {
    if (!localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', [])
    }
    this.refreshTasks()
  },

  methods: {
    addTask() {
      if (!this.newTitle) {
        return
      }
      const newTask = {
        id: this.tasks.length + 1,
        title: this.newTitle,
        description: this.newDesc
      }
      this.tasks.push(newTask)
      this.newTitle = ''
      this.newDesc = ''
      this.saveTasks()
      this.$emit('refreshTasks')
    },

    saveTasks() {
      const parsed = JSON.stringify(this.tasks)
      localStorage.setItem('tasks', parsed)
    },

    refreshTasks() {
      var self = this
      var str_data = localStorage.getItem('tasks')
      var arr = JSON.parse(str_data)

      for (let i = 0; i < arr.length; i++) {
        self.tasks.push(arr[i])
      }

      console.log(this.tasks)
    }
  }

}
</script>

<style scoped>

input {
  height: 30px;
  width: 200px;
  padding: 5px;
  margin: 30px;
}

button {
  margin-left: 30px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tasks {
  width: 100%;
}
</style>