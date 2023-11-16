<template>
  <label :class="classes.label">
    <input
      v-model="inputValue"
      ref="input"
      :class="classes.input"
      type="checkbox"
    />
  </label>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: {
    value: {
      type: Boolean,
      default: false,
      require: true,
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
