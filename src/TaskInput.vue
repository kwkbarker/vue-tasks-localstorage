<template>
  <div class="row-content justify-content-center mb-3">
    <input
      type="text"
      placeholder="Title"
      :value="fieldTitle"
      id='title-input-field'
      @input="$emit('update:title', $event.target.value)"
    />
    <input
      type="text"
      placeholder="Description"
      :value="fieldDescription"
      id='description-input-field'
      @input="$emit('update:description', $event.target.value)"
    />


  
    <div class='row row-content' style="display: inline-block;">
      <div class='col-sm-2'>
        <h6>Importance</h6>
      </div>
      <div class='col-sm-1'></div>
      <div class='btn-group btn-group-toggle col-sm-9' data-toggle='buttons'>
        <input 
          type='radio' 
          class='btn-check'
          name='importance' 
          value='danger'
          id='dangerBtn'
          @input="$emit('update:danger', $event.target.value)"
        />
        <label class='btn btn-outline-danger' for='dangerBtn'>
          Urgent
        </label>

        <input 
          type='radio'
          class='btn-check'
          name='importance' 
          value='warning'
          id='warningBtn'
          @input="$emit('update:warning', $event.target.value)"
        />
        <label class='btn btn-outline-warning' for='warningBtn'>
          Soon
        </label>

        <input 
          type='radio' 
          class='btn-check'
          name='importance'
          value='secondary'
          id='secondaryBtn'
          @input="$emit('update:secondary', $event.target.value)"
        />
        <label class='btn btn-outline-secondary' for='secondaryBtn'>
          Whenever
        </label>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  emits: ['update:title', 'update:description', 'update:danger', 'update:warning', 'update:secondary'],
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    edit: {
      type: Boolean
    },
    task: Object
  },

  data() {
    return {
      fieldTitle: null,
      fieldDescription: null
    }
  },

  mounted() {
    if (this.edit) {
      this.fieldTitle = this.task.title
      this.fieldDescription = this.task.description
    } else {
      this.fieldTitle = this.title
      this.fieldDescription = this.description
    }
    
  },

}
</script>

<style scoped>

input {
  height: 30px;
  width: 200px;
  padding: 5px;
  margin: 30px;
}

</style>