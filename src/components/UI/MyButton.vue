<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
    name: "my-button"
}
</script>

<style>
.btn {
  padding: 10px;
  background: none;
  color: indigo;
  border: 2px solid indigo;
  cursor: pointer;
}
</style>