<template>
  <div class="h-[100vh] flex items-center justify-center">
    <div
      class="w-fit px-10 py-5 border rounded-[11px] border-red-300 ring ring-red-200 ring-opacity-50"
    >
      <h1 class="mb-4 font-bold text-[19px] leading-7 text-red-700">
        Ошибка отправки данных
      </h1>
      <p class="text-red-700 mb-5">{{ requestErrorMessage }}</p>
      <router-link
        class="max-w-[302px] w-full px-4 py-[9px] ml-auto font-normal text-xs leading-5 text-btnPrim rounded-lg bg-btnPrim200 border border-transparent focus:outline-none shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:bg-btnPrim300 active:bg-btnPrim500 active:text-white transition-colors"
        to="/"
        >Попробуйте проити регистрацию еще раз</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ErrorMessage",
  computed: {
    ...mapState(["requestErrorMessage"]),
  },
};
</script>
