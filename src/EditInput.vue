<template>
    <div
        v-if="editShow"
    >
            <task-input
                v-model:title="newTask.newTitle"
                v-model:description="newTask.newDesc"
            />
            <button @click="editTask">
                Submit
            </button>
        
    </div>
    
</template>

<script>
import TaskInput from './TaskInput.vue'
export default {
    emits: ['editTitle'],
    components: {
        TaskInput
    },

    props: {
        editShow: {
            type: Boolean
        }
    },

    data() {
        return {
            newTask: {
                newTitle: null,
                newDesc: null
            }
        }
    },

    methods: {
        editTask() {
            console.log(`editinput newtitle: ${this.newTask.newTitle}`)
            this.$emit('editTitle', {
                title: this.newTask.newTitle,
                description: this.newTask.newDesc
            })
        },
        
    }
    
}
</script>

<style scoped>

</style>