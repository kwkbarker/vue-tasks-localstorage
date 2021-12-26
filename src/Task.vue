<template>
  <div 
    class="task"
    @submit.prevent="editTask"
  >
    <p>{{ task.title }}</p>
    <p>{{ task.description}}</p>

    <button 
      id="{{ task.id }}" 
      @click="editClick( )"
    >Edit</button>

    <edit-input
      :editShow="editShow"
      @editTask='editTask'
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
    }
  },

  data() {
    return {
      editShow: false,
      editTitle: null,
      editDesc: null
    }
  },

  methods: {
    editTask() {
      const newTask = {
        id: this.task.id,
        title: this.editTitle,
        description: this.editDesc
      }

      this.$store.commit('editTask', newTask)

      this.editTitle = ''
      this.editDesc = ''

      this.$emit('refreshTasks')
    },

    editClick( ) {
      this.editShow = !this.editShow
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