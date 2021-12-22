<template>
  <q-page>
    <q-form @submit.prevent="onSubmit" class="auth-main-block row justify-center items-center default-text">
      <div class="auth-main">
        <div class="auth-title">Авторизация</div>
        <div class="card column">
          <div class="form-block">
            <p class="label">Адрес электронной почты</p>
            <q-input
              v-model.trim="form.email"
              type="email"
              placeholder="Введите email"
              outlined
              :error="v$.email.$error"
              @blur="v$.email.$touch">
              <template v-slot:error>
                <div
                  class="text-left text-negative"
                  v-for="error in v$.email.$errors"
                  :key="error"
                >
                  {{emailErrors[error.$message]}}
                </div>
              </template>
            </q-input>
            <p class="label">Пароль</p>
            <q-input
              v-model.trim="form.password"
              :type="isPasswordHidden ? 'password' : 'text'"
              placeholder="Пароль.."
              outlined
              no-error-icon
              :error="v$.password.$error"
              @blur="v$.password.$touch">
              <template v-slot:append>
                <q-icon
                  :name="isPasswordHidden ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPasswordHidden = !isPasswordHidden"
                />
              </template>
              <template v-slot:error>
                <div class="text-left text-negative">Это поле обязательно.</div>
              </template>
            </q-input>
            <router-link class="label-grey" to="/auth/forgot-password" >Забыли пароль ?</router-link>
          </div>
          <q-btn
            :loading="loading"
            label="Войти"
            class="full-width btn-auth"
            type="submit"
            loader
          />
        </div>
        <div class="auth-sub-title">
          Еще нет аккаунта ? <router-link to="/auth/signup">Зарегистрируйся</router-link>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script lang="ts">
// TODO Create the ability to register and login with Google
import { ref, reactive } from 'vue'
import { useStore } from 'src/store'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { emailErrors } from 'src/helpers/vuelidate'

export default {
  name: 'Login',
  setup () {
    const store = useStore()
    const router = useRouter()
    const form = reactive({
      email: '',
      password: ''
    })
    const isPasswordHidden = ref<boolean>(true)
    const loading = ref<boolean>(false)
    const rules = {
      email: { required, email },
      password: { required }
    }
    const v$ = useVuelidate(rules, form)
    const onSubmit = async () => {
      if (v$.value.$invalid) {
        v$.value.$touch()
        return
      }
      const formData = {
        email: form.email,
        password: form.password
      }
      try {
        loading.value = true
        await store.dispatch('login', formData)
        await router.push({ name: 'home' })
      } catch (e) {
        console.error(e)
      } finally {
        loading.value = false
      }
    }
    return {
      form,
      isPasswordHidden,
      loading,
      onSubmit,
      v$,
      emailErrors
    }
  }
}
</script>
