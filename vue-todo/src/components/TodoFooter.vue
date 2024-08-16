<!-- vueInit -->
<template lang="">
    <div>
      <span @click="clearTodo">clear All</span>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    methods: {
      ...mapMutations({
        'clearTodo' : 'clearAllItems',
      }),
      clearTodo : function() {
        this.$store.commit("clearAllItems");
      },
    }
}
</script>
<style scoped>
    
</style>