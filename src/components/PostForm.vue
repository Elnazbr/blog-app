<template>
  <form @submit.prevent="savePost">
    <div>
      <my-input v-model.trim="post.title" placeholder="Название поста" />
    </div>
    <div>
      <my-input v-model.trim="post.body" placeholder="Описание поста" />
    </div>
    <div>
      <my-button style="margin-top: 15px">Добавить</my-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    savePost() {
      this.post.id = Date.now();
      this.$emit("save", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
form {
  display: flex;
  flex-direction: column;
}
.app_btns{
  display: flex;
  justify-content: space-between;
}
</style>