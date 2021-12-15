<template>
  <form @submit.prevent="addTask">
    <input
      type="text"
      placeholder="Title"
      name="title"
      v-model="value"
    />
    <p>{{ value }}</p>
    <button 
      type="submit"
    >Submit</button>
    <br>
    <div
       v-if="showTasks"
    >
      <div
        v-for="task in tasks"
        :key="task.id"
      >
        <p>{{ task.title }}</p>
      </div>
    </div>
    <div
      v-else
    >
      <h5>No tasks to show.</h5>
    </div>

  </form>
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      required: true
    },
  },

  data() {
    return {
      tasks: [],
      showTasks: false
    }
  },

  // // fetch tasks from local storage
  // or initialize empty storage
  mounted() {
    if (!localStorage.tasks) {
      localStorage.tasks = []
    }
    this.refreshTasks()
  },

  methods: {
    addTask() {
      if (!this.value) {
        return
      }
      console.log(this.value)
      this.tasks.push(this.value)
      // this.value = ''
      this.saveTasks()
      this.refreshTasks()
    },

    saveTasks() {
      const parsed = JSON.stringify(this.tasks)
      localStorage.setItem('tasks', parsed)
    },

    refreshTasks() {
      var self = this
      self.tasks = localStorage.tasks
    }
  }

}
</script>

<style scoped>

</style>