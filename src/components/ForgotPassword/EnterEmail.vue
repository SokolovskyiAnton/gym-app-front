<template>
  <q-form @submit.prevent="onSubmitEmail" class="auth-main-block row justify-center items-center default-text">
    <div class="auth-main">
      <div class="auth-title">Забыли пароль</div>
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
          <div v-if="!isRequestAllow" class="retry-send-email">
            <i>Повторная поптыка через {{timer}} секунд.</i>
          </div>
        </div>
        <q-btn
          :disabled="!isRequestAllow"
          :loading="loading"
          label="Подтвердить"
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
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { emailErrors } from 'src/helpers/vuelidate'
import { Notify } from 'quasar'
export default {
  name: 'enter-email',
  setup () {
    const form = reactive({
      email: ''
    })
    const rules = {
      email: { required, email }
    }
    const store = useStore()
    const loading = ref<boolean>(false)
    const isRequestAllow = ref<boolean>(true)
    const timer = ref<number>(60)
    const v$ = useVuelidate(rules, form)
    const onSubmitEmail = async () => {
      if (v$.value.$invalid) {
        v$.value.$touch()
        return
      }
      const formData = {
        email: form.email
      }
      try {
        loading.value = true
        await store.dispatch('forgotPassword', formData)
        retrySendEmail()
        showSuccessNotify()
      } catch (e) {
        console.error(e)
      } finally {
        loading.value = false
      }
    }
    const retrySendEmail = () => {
      const timerId = setInterval(() => {
        isRequestAllow.value = false
        if (!timer.value) {
          clearInterval(timerId)
          timer.value = 60
          isRequestAllow.value = true
          return
        }
        timer.value--
      }, 1000)
    }
    const showSuccessNotify = () => {
      Notify.create({
        type: 'positive',
        message: 'Запрос прошел успешно.',
        caption: 'На вашу почту отправлено письмо с подтверждением.',
        timeout: 6000
      })
    }
    return {
      form,
      onSubmitEmail,
      emailErrors,
      v$,
      loading,
      isRequestAllow,
      timer
    }
  }
}
</script>

<style lang="stylus" scoped>
.retry-send-email
  font-size 14px
  padding-left 5px
  color var(--gym-text-color-2)
</style>
