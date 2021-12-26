<template>
  <q-form @submit.prevent="onSubmit" class="auth-main-block row justify-center items-center default-text">
    <div class="auth-main">
      <div class="auth-title">Создать аккаунт</div>
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
              <div
                class="text-left text-negative"
                v-for="error in v$.password.$errors"
                :key="error"
              >
                {{passwordErrors[error.$message]}}
              </div>
            </template>
          </q-input>
          <p class="label">Имя</p>
          <q-input
            v-model.trim="form.username"
            type="text"
            placeholder="Ваше имя"
            outlined
            :error="v$.username.$error"
            @blur="v$.username.$touch">
            <template v-slot:error>
              <div class="text-left text-negative">Это поле обязательно.</div>
            </template>
          </q-input>
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
        Уже есть аккаунт ? <router-link to="/auth/login">Войти</router-link>
      </div>
    </div>
  </q-form>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import { useStore } from 'src/store'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { emailErrors, passwordErrors } from 'src/helpers/vuelidate'
import { RegisterData } from 'components/constans'
import { Notify } from 'quasar'

export default {
  name: 'register-form',
  setup () {
    const form = reactive<RegisterData>({
      username: '',
      password: '',
      email: ''
    })
    const rules = {
      email: { required, email },
      password: { required, minLength: minLength(8) },
      username: { required }
    }
    const store = useStore()
    const router = useRouter()
    const loading = ref<boolean>(false)
    const isPasswordHidden = ref<boolean>(true)
    const v$ = useVuelidate(rules, form)
    const onSubmit = async () => {
      if (v$.value.$invalid) {
        v$.value.$touch()
        return
      }
      const formData = {
        email: form.email,
        password: form.password,
        username: form.username
      }
      try {
        loading.value = true
        await store.dispatch('signup', formData)
        showSuccessNotify()
        await router.push({ name: 'login' })
      } catch (e) {
        console.error(e)
      } finally {
        loading.value = false
      }
    }
    const showSuccessNotify = () => {
      Notify.create({
        type: 'positive',
        message: 'Аккаунт успешно создан.',
        caption: 'На вашу почту отправлено письмо с подтверждением.',
        timeout: 6000
      })
    }
    return {
      form,
      onSubmit,
      emailErrors,
      passwordErrors,
      v$,
      loading,
      isPasswordHidden
    }
  }
}
</script>
