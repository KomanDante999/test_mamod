<template>
  <div
    class="w-full h-full overflow-y-auto py-8 px-5 flex justify-center items-center"
  >
    <registration-form class="flex-shrink-0" />
  </div>
</template>

<script>
import RegistrationForm from "@/components/RegistrationForm.vue";
export default {
  name: "RegistrationPage",
  components: { RegistrationForm },
};
</script>
