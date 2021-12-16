<template>
  <div class="task">
    <p>{{ task.title }}</p>
    <p>{{ task.description}}</p>
  </div>
</template>

<script>

export default {
  props: {
    task: {
      type: Object
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