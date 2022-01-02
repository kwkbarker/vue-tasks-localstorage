<template>
  <div class="row-content justify-content-center mb-3">
    <input
      type="text"
      :placeholder="placeTitle"
      :value="title"
      @input="$emit('update:newTitle', $event.target.value)"
    />
    <input
      type="text"
      :placeholder="placeDescription"
      :value="description"
      @input="$emit('update:newDescription', $event.target.value)"
    />


  
    <div class='row row-content' style="display: inline-block;">
      <div class='col-sm-2'>
        <h6>Importance</h6>
      </div>
      <div class='col-sm-1'></div>
      <div class='btn-group btn-group-toggle col-sm-9' data-toggle='buttons'>
        <label class='btn btn-danger'>
          <input 
            type='radio' 
            class='btn-check'
            name='importance' 
            value='danger'
            @input="$emit('update:danger', $event.target.value)"
          />Urgent
        </label>
        <label class='btn btn-warning'>
          <input 
            type='radio'
            class='btn-check'
            name='importance' 
            value='warning'
            @input="$emit('update:warning', $event.target.value)"
          />Soon
        </label>
        <label class='btn btn-secondary'>
          <input 
            type='radio' 
            class='btn-check'
            name='importance'
            value='secondary'
            @input="$emit('update:secondary', $event.target.value)"
          />Whenever
        </label>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  emits: ['update:newTitle', 'update:newDescription', 'update:danger', 'update:warning', 'update:secondary'],
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    edit: {
      type: Boolean
    }
  },

  computed: {
    placeTitle() {
      if (this.edit) {
        return this.title
      } else {
        return "Title"
      }
    },

    placeDescription() {
      if (this.edit) {
        return this.description
      } else {
        return "Description"
      }
    },
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

</style>