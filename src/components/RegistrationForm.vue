<template>
  <form @submit.prevent="validationForm" class="reg-form">
    <!-- title -->
    <div class="reg-form__container">
      <h1 class="font-bold text-[19px] leading-7 mb-[17px]">Регистрация</h1>
    </div>
    <hr class="h-[2px]" />
    <!-- input block -->
    <div class="reg-form__container pt-[17px] pb-3">
      <p class="font-medium text-base leading-[19px] mb-[34px]">
        Заполните Ваши данные
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-[14px] gap-y-[31px]">
        <base-input
          v-model="userDataValue.username"
          placeholder="Имя"
          :errorMessage="errors.username"
          :classes="{
            label: 'reg-form__label',
            error: 'reg-form__error-message',
            input:
              'form-input w-full block border border-borderInput rounded-[11px] font-normal text-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
          }"
        />
        <base-input
          v-model="userDataValue.email"
          placeholder="Email"
          type="email"
          :errorMessage="errors.email"
          :classes="{
            label: 'reg-form__label',
            error: 'reg-form__error-message',
            input:
              'form-input w-full block border border-borderInput rounded-[11px] font-normal text-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
          }"
        />
        <base-select
          :categoriesData="roleSelectData"
          v-model="userDataValue.role"
          :errorMessage="errors.role"
          placeholder="Должность"
          class="col-start-1 sm:col-start-2"
          :classes="{
            label: 'reg-form__label',
            error: 'reg-form__error-message',
            placeholder:
              'absolute top-2 left-3 pointer-events-none font-normal text-sm text-gray-500',
            input:
              'form-select w-full block border border-borderInput rounded-[11px] font-normal text-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
          }"
        />
        <base-input-pass
          v-model="userDataValue.password"
          placeholder="Пароль"
          :errorMessage="errors.password"
          :classes="{
            label: 'reg-form__label',
            error: 'reg-form__error-message',
            showPass: 'absolute top-3 right-4',
            placeholder:
              'absolute top-2 left-3 pointer-events-none font-normal text-sm text-gray-500',
            input:
              'form-select w-full block border border-borderInput rounded-[11px] font-normal text-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
          }"
        />
        <base-input-pass
          v-model="userDataValue.password_repeat"
          placeholder="Повторите пароль"
          :errorMessage="errors.password_repeat"
          :classes="{
            label: 'reg-form__label',
            error: 'reg-form__error-message',
            showPass: 'absolute top-3 right-4 focus:outline-none',
            placeholder:
              'absolute top-2 left-3 pointer-events-none font-normal text-sm text-gray-500',
            input:
              'form-select w-full block border border-borderInput rounded-[11px] font-normal text-sm shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
          }"
        />
      </div>
    </div>
    <hr class="h-[2px]" />

    <!-- checkbox block -->
    <div class="reg-form__container pt-6">
      <div class="flex mb-8">
        <base-checkbox-switch
          v-model="userDataValue.public"
          :value="true"
          class="mr-2"
        />
        <div>
          <p class="font-medium text-base leading-[19px] mb-[10px]">
            Хотите чтобы Ваш профиль видели другие участники платформы?
          </p>
          <p class="font-normal text-sm leading-[19px] text-textExplanation">
            Включает профиль для просмотра другими пользователями по ссылке
          </p>
        </div>
      </div>
      <div class="flex items-start">
        <base-checkbox
          class="mr-6"
          v-model="userApprovalChange"
          :value="true"
          :classes="{
            input:
              'form-checkbox rounded border-gray-300 text-checkbox shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50',
          }"
        />
        <div class="max-w-[508px] mr-3 font-normal text-sm leading-[19px]">
          <span>Регистрируясь, Вы соглашаетесь с </span>
          <a
            class="text-links focus:outline-none"
            href="#"
            target="_blank"
            tabindex="-1"
            >политикой конфиденциальности
          </a>
          <span>и обработкой </span>
          <a
            class="text-links focus:outline-none"
            href="#"
            target="_blank"
            tabindex="-1"
            >персональных данных</a
          >
        </div>
        <button
          class="max-w-[302px] w-full px-4 py-[9px] ml-auto font-normal text-xs leading-5 text-btnPrim rounded-lg bg-btnPrim200 border border-transparent focus:outline-none shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:bg-btnPrim300 active:bg-btnPrim500 active:text-white transition-colors"
          :class="{ 'button-disabled': !userApproval }"
          type="submit"
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import BaseInput from "./BaseInput.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import BaseSelect from "./BaseSelect.vue";
import BaseInputPass from "./BaseInputPass.vue";
import BaseCheckbox from "./BaseCheckbox.vue";
import BaseCheckboxSwitch from "./BaseCheckboxSwitch.vue";

export default {
  components: {
    BaseInput,
    BaseSelect,
    BaseInputPass,
    BaseCheckbox,
    BaseCheckboxSwitch,
  },
  data() {
    return {
      errors: {},
      userApproval: true,
    };
  },
  computed: {
    ...mapState(["userData", "roleSelectData"]),
    userDataValue: {
      get() {
        return this.userData;
      },
      set(newValue) {
        this.updateUserData(newValue);
      },
    },
    userApprovalChange: {
      get() {
        return this.userApproval;
      },
      set(newValue) {
        this.userApproval = newValue;
      },
    },
  },
  methods: {
    ...mapMutations(["updateUserData"]),
    ...mapActions(["sendMockPostRequest"]),
    validationForm() {
      this.errors = {};
      // Валидация имени
      if (!this.userDataValue.username) {
        this.errors.username = "Пожалуйста, введите имя";
      }
      // Валидация email
      if (!this.userDataValue.email) {
        this.errors.email = "Пожалуйста, введите email";
      } else if (!this.isValidEmail(this.userDataValue.email)) {
        this.errors.email = "Пожалуйста, введите корректный email";
      }
      // Валидация должности
      if (!this.userDataValue.role) {
        this.errors.role = "Пожалуйста, выберите должность";
      }

      // Валидация пароля
      if (!this.userDataValue.password) {
        this.errors.password = "Пожалуйста, введите пароль";
      } else if (this.userDataValue.password.length < 6) {
        this.errors.password = "Пароль должен содержать минимум 6 символов";
      }

      // Валидация повторного ввода пароля
      if (!this.userDataValue.password_repeat) {
        this.errors.password_repeat = "Пожалуйста, повторите пароль";
      } else if (
        this.userDataValue.password_repeat !== this.userDataValue.password
      ) {
        this.errors.password_repeat = "Пароли не совпадают";
      }

      if (Object.keys(this.errors).length === 0 && this.userApproval) {
        this.sendMockPostRequest();
      }
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
  },
};
</script>
