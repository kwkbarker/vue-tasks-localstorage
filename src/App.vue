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
      v-model:danger="danger"
      v-model:warning="warning"
      v-model:secondary="secondary"
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
      danger: null,
      warning: null,
      secondary: null,
      importance: null,
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

          
      if (this.danger) {
        this.importance = "danger"
      } else if (this.warning) {
        this.importance = "warning"
      } else if (this.secondary) {
        this.importance = "secondary"
      }

      const newTask = {
        id: this.$store.getters['tasks/lastNum'] + 1,
        title: this.title,
        description: this.description,
        importance: this.importance
      }
      // this.tasks.push(newTask)
      this.$store.commit('tasks/addTask', newTask)
      this.title = ''
      this.description = ''
      this.$store.dispatch('tasks/save')
      this.$emit('refreshTasks')
    },

    refreshTasks() {
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
  /* align-items: center; */
}

.tasks {
  width: 100%;
}

edit-input {
  margin:0;
}
</style>