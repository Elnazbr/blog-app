<template>
  <div class="blog">
    <my-input v-model.trim="search" type="text" placeholder="Поиск..." />
    <div class="app__btns">
      <my-select
        style="margin-top: 15px"
        v-model="selectSort"
        :options="sortOptions"
      />
      <my-button style="margin-top: 15px" @click="showModal"
        >Создать пост</my-button
      >
    </div>
    <modal-window v-model:show="modalVisible"
      ><post-form @save="savePost"
    /></modal-window>
    <post-list :posts="searchPosts" @delete="deletePost" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
export default {
  components: { PostList, PostForm },
  data() {
    return {
      posts: [],
      selectSort: "",
      search: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
      modalVisible: false,
    };
  },
  methods: {
    savePost(post) {
      if (post.title != "" && post.body != "") {
        this.posts.push(post);
      }
      this.modalVisible = false;
    },
    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id != id);
    },
    showModal() {
      this.modalVisible = true;
    },
  },
  computed: {
    sortedPosts() {
      return this.posts.sort((post1, post2) =>
        post1[this.selectSort]?.localeCompare(post2[this.selectSort])
      );
    },
    searchPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  mounted() {
      this.posts = JSON.parse(localStorage.getItem("posts")) || [];
  },
  watch: {
    posts: {
      handler(newValue, oldValue) {
      localStorage.setItem("posts", JSON.stringify(newValue));
    },
    deep: true
    }
  },
};
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
}
.blog {
  padding: 15px;
}
</style>