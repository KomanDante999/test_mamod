<template>
  <label :class="classes.label">
    <span v-if="currentSelectedItem === 0" :class="classes.placeholder">
      {{ placeholder }}</span
    >
    <select v-model="currentSelectedItem" :class="classes.input">
      <option
        v-for="item in categoriesData"
        :key="item.value"
        :value="item.value"
      >
        {{ item.name }}
      </option>
    </select>
    <span v-if="errorMessage" :class="classes.error">
      {{ errorMessage }}
    </span></label
  >
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    categoriesData: {
      type: Array,
      require: true,
    },
    selectedItem: {
      type: Number,
      require: false,
      default: 0,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    placeholder: String,
    classes: {
      type: Object,
      default: () => ({}),
      require: false,
    },
  },
  emits: ["update:value"],
  data() {
    return {
      currentSelectedItem: this.selectedItem,
    };
  },
  computed: {
    selectedItemValue: {
      get() {
        return this.currentSelectedItem;
      },
      set(newValue) {
        this.currentSelectedItem = newValue;
      },
    },
  },
  watch: {
    currentSelectedItem(newValue) {
      this.currentSelectedItem = newValue;
      this.$emit("input", newValue);
    },
  },
};
</script>
