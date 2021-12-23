<template>
    <div
        v-if="editShow"
    >
        <form submit.prevent="editTask">
            <task-input
                v-model:title="newTitle"
                v-model:description="newDesc"
            />
            <button type="submit">
                Submit
            </button>
        </form>
    </div>
    
</template>

<script>
import TaskInput from './TaskInput.vue'
export default {
    emits: ['editTask'],
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
            newTitle: null,
            newDesc: null
        }
    },

    methods: {
        editTask() {
            this.$emit('editTask', {
                newTitle: "newTitle",
                newDesc: "newDesc"
            })
        },
        
    }
    
}
</script>

<style scoped>

</style>