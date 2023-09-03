import {useAuthStore} from "~/stores/UseAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn) {
    return navigateTo("/login", {replace: true});
  }
})