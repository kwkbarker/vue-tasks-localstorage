<template>
  <div 
    class="task"
    @submit.prevent="editTask"
  >
    <p>{{ task.title }}</p>
    <p>{{ task.description}}</p>

    <button 
      id="{{ task.id }}" 
      @click="editClick()"
    >
      Edit
    </button>

    <button @click="deleteClick()">
      Delete
    </button>

    <edit-input
      :editShow="editShow"
      @editTitle='editTask'
    />
  </div>
</template>

<script>
import TaskInput from './TaskInput.vue'
import EditInput from './EditInput.vue'

export default {
  components: {
    TaskInput,
    EditInput
  },

  props: {
    task: {
      type: Object
    },
    editTitle: String,
    editDesc: String
  },

  data() {
    return {
      editShow: false,
    }
  },

  methods: {
    editTask(newTask) {
      this.editShow = false
      const editedTask = {
        id: this.task.id,
        title: newTask.title,
        description: newTask.description
      }
      this.$store.commit('tasks/editTask', editedTask)

      this.$emit('refreshTasks')
    },

    editClick() {
      this.editShow = !this.editShow
    },

    deleteClick() {
      this.$store.commit('tasks/deleteTask', this.task.id)
      this.$emit('refreshTasks')
    }
  }
}
</script>

<style scoped>
.task {
  border: 1px solid black;
  border-radius: 5px;
  padding-right: 10px;
  padding-left: 10px;
  margin: 10px;
  width: 100%;
}


</style>