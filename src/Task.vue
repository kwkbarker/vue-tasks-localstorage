<template>

<div class='accordion' id='accordion-tasks'>
  <div 
    class="card"
    @submit.prevent="editTask"
  >
    <div 
      class="card-header"
      :class='bgColor'
      role='tab' 
    >
      <div class="row row-content align-items-center">
        <div class='col-8 text-left'>
          <h4 class='mb-0 text-white'>
            <a 
              class='btn btn-outline-dark btn-lg collapsed'
              data-bs-toggle='collapse' 
              :data-bs-target='tabPanelTarget'
            >{{ task.title }}</a>
          </h4>
        </div>

        <div class='col-4 text-right right-buttons'>
          <button type="button" 
            class='btn btn-sm btn-outline-info'
            data-bs-toggle='modal'
            :data-bs-target='modalName' 
          >Edit</button>
          
          <button 
            class='btn btn-sm btn-outline-dark' 
            @click="deleteClick()"
          >Done!</button>
        </div>
      </div>
      
      <div 
        role='tabpanel' 
        class='collapse text-black-50' 
        :id='tabPanelName' 
        data-parent='#accordion-tasks'
      >
        <div 
          class='card-body' 
        >{{ task.description }}</div>
      </div>
    </div>
  </div>

  <edit-input
    :task="task"
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
    },
    editTitle: String,
    editDesc: String
  },

  data() {
    return {
      editShow: false
    }
  },

  methods: {
    editTask(newTask) {
      this.editShow = false
      const editedTask = {
        id: this.task.id,
        title: newTask.title,
        description: newTask.description,
        importance: newTask.importance
      }
      // this.$store.commit('tasks/deleteTask', editedTask.id)
      this.$store.commit('tasks/editTask', editedTask)
      this.$store.dispatch('tasks/save')
      this.$emit('refreshTasks')
    },


    deleteClick() {
      this.$store.commit('tasks/deleteTask', this.task.id)
      this.$store.commit('tasks/fixIds')
      this.$store.dispatch('tasks/save')
      this.$emit('refreshTasks')
    },

  },

  computed: {
    tabPanelName() {
      return "panel" + this.task.id
    },

    tabPanelTarget() {
      return "#" + this.tabPanelName
    },

    bgColor() {
      return "bg-" + this.task.importance
    },

    modalName() {
      return "#editWindow" + this.task.id
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