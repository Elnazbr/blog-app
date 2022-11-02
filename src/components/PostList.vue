<template>
    <div class="postlist__header"><strong>Список постов:</strong></div>
    <post-item v-for="post in posts" :key="post.id" :post="post" @delete="$emit('delete', post.id)"/>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
  components: { PostItem },
  props: {
    posts: Array,
  },
  emits: [
    "delete"
  ],
  methods: {
  },
};
</script>

<style>
.postlist__header {
  margin-top: 15px;
}
</style>