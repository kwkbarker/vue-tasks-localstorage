<template>
    <input
      type="text"
      placeholder="Title"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    />
    <input
      type="text"
      placeholder="Description"
      :value="description"
      @input="$emit('update:description', $event.target.value)"

    />

</template>

<script>
export default {
  emits: ['update:title', 'update:description'],
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
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