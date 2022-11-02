<template>
  <input class="input" type="text" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  name: "my-input",
  methods: {
    updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
    }
  }
};
</script>

<style>
.input{
  border: 2px solid indigo;
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  height: 40px;
}
</style>