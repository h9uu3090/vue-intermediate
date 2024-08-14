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
        this.$store.commit("clearAllItems");
      },
    }
}
</script>
<style scoped>
    
</style>