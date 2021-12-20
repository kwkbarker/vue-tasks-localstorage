<template>
  <div 
    class="task"
    @click="editTask"
  >
    <p>{{ task.title }}</p>
    <p>{{ task.description}}</p>
    <!-- <div
      class="edit"
      v-if="showEdit"
    >
      <edit-input 
        :title="task.title"
        :description="task.description"
        @submit="editTask"
      />
    </div> -->
  </div>
</template>

<script>
import EditInput from './EditInput.vue'

export default {
  components: {
    EditInput
  },

  props: {
    task: {
      type: Object
    }
  },

  data() {
    return {
      showEdit: false,
      editTitle: null,
      editDesc: null
    }
  },

  methods: {
    editTask() {
      this.showEdit = true
      console.log('edit')

      this.showEdit = false
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