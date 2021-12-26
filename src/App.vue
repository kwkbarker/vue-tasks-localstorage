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
          <task :task="task" 
          @refreshTasks='refreshTasks'
          />
   
        </div>
    </div>
    <div
        v-else
      >
      <h5>No tasks to show.</h5>
    </div>
  <h2>New Task</h2>
  <form @submit.prevent="addTask">
    <task-input
      v-model:title="title"
      v-model:description="description"
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
import TaskInput from './TaskInput.vue'

export default {
  components: {
    Task,
    TaskInput,
  },

  data() {
    return {
      title: null,
      description: null,
      newTitle: null,
      newDesc: null,
    }
  },

  // // fetch tasks from local storage
  // or initialize empty storage
  mounted() {
    this.refreshTasks()
  },

  methods: {
    addTask() {
      if (!this.title) {
        return
      }
      const newTask = {
        id: this.$store.getters.count + 1,
        title: this.title,
        description: this.description
      }
      // this.tasks.push(newTask)
      this.$store.commit('addTask', newTask)
      this.title = ''
      this.description = ''
      // this.saveTasks()
      this.$emit('refreshTasks')
    },

    saveTasks() {
      this.$store.dispatch('tasks/save')
    },

    refreshTasks() {
      // var self = this
      // var str_data = localStorage.getItem('tasks')
      // var arr = JSON.parse(str_data)

      // for (let i = 0; i < arr.length; i++) {
      //   self.tasks.push(arr[i])
      // }
      this.$store.dispatch('tasks/fetch')
    },

  },

  computed: {
    tasks() {
      return this.$store.state.tasks.all
    }
  }

}
</script>

<style scoped>

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

edit-input {
  margin:0;
}
</style>