<template>
  <label class="switch" :class="{ 'is-enabled-switch': value === true }">
    <input
      v-model="inputValue"
      ref="input"
      class="absolute w-[1px] h-[1px] -m-[1px] border-0 p-0 overflow-hidden opacity-0"
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
