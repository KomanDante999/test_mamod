<template>
  <label :class="classes.label">
    <input
      v-model="inputValue"
      ref="input"
      :class="classes.input"
      :placeholder="placeholder"
      :type="type"
    />
    <span v-if="errorMessage" :class="classes.error">
      {{ errorMessage }}
    </span>
  </label>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    value: {
      type: String,
      default: "",
      require: false,
    },
    type: {
      type: String,
      default: "text",
      require: false,
    },
    placeholder: String,
    errorMessage: {
      type: String,
      default: "",
      require: false,
    },
    classes: {
      type: Object,
      default: () => ({}),
      require: false,
    },
  },
  emits: ["update:value"],
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>
