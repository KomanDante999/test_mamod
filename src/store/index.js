import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      public: true,
      username: "",
      role: null,
      email: "",
      password: "",
      password_repeat: "",
      requestErrorMessage: "",
    },
    roleSelectData: [
      {
        value: 1,
        name: "Администратор",
      },
      {
        value: 2,
        name: "Менеджер",
      },
      {
        value: 3,
        name: "Директор",
      },
      {
        value: 4,
        name: "Техник",
      },
      {
        value: 5,
        name: "Охранник",
      },
      {
        value: 6,
        name: "Бухгалтер",
      },
    ],
  },
  getters: {},
  mutations: {
    updateUserData(state, data) {
      state.userData = { ...state.userData, ...data };
    },
    updateRequestErrorMessage(state, data) {
      state.requestErrorMessage = data;
    },
  },
  actions: {
    async sendMockPostRequest(context) {
      try {
        const response = await axios.post(
          "http://example.com/xn--80akhbyknj4f",
          {
            public: context.state.userData.public,
            username: context.state.userData.username,
            role: context.state.userData.role,
            email: context.state.userData.email,
            password: context.state.userData.password,
            password_repeat: context.state.userData.password_repeat,
          }
        );
        console.log(response.data);
        router.push({
          name: "successfulMessage",
        });
      } catch (error) {
        console.error(error);
        context.commit("updateRequestErrorMessage", error.message);
        router.push({
          name: "errorMessage",
        });
      }
    },
  },
  modules: {},
});
const mock = new MockAdapter(axios);

mock
  .onPost("http://example.com/xn--80akhbyknj4f")
  .reply(200, { success: true });
