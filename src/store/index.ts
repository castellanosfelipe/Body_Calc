import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface UserProfile {
  sexo: string | null;
  altura: number | null;
  peso: number | null;
  edad: number | null;
  tdee: number | null;
}

export default new Vuex.Store<{ profile: UserProfile }>({
  state: {
    profile: {
      sexo: null,
      altura: null,
      peso: null,
      edad: null,
      tdee: null,
    },
  },
  mutations: {
    setProfile(state, payload: Partial<UserProfile>) {
      Object.assign(state.profile, payload);
    },
  },
});
