<template>
  <form @submit.prevent="submitButton">
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
    >Submit</button>
  </form>

</template>

<script>

export default {
  emits: ['submitButton'],
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    post: {
      type: Object
    }
  },

  data() {
    return {
      newTitle: null,
      newDesc: null,
    }
  },

  methods: {
    submitButton() {
      this.$emit('submitButton', {
        post: this.post,
        title: this.newTitle,
        description: this.newDesc
      })
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

</style>