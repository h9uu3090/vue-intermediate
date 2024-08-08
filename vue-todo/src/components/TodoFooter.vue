<!-- vueInit -->
<template lang="">
    <div>
      <span @click="clearTodo">clear All</span>
    </div>
</template>
<script>
export default {
    methods: {
      clearTodo : function() {
        this.$emit("clearAll");
      },
    }
}
</script>
<style scoped>
    
</style>