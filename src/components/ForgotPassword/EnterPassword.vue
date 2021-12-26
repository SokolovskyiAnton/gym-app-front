<template>
  <q-form  @submit.prevent="onSubmitPassword" class="auth-main-block row justify-center items-center default-text">
    <div class="auth-main">
      <div class="auth-title">Новый пароль</div>
      <div class="card column">
        <div class="form-block">
          <p class="label">Введите новый пароль</p>
          <q-input
            v-model.trim="form.newPassword"
            :type="isPasswordHidden ? 'password' : 'text'"
            placeholder="Пароль.."
            outlined
            no-error-icon
            :error="v$.newPassword.$error"
            @blur="v$.newPassword.$touch">
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
                v-for="error in v$.newPassword.$errors"
                :key="error"
              >
                {{passwordErrors[error.$message]}}
              </div>
            </template>
          </q-input>
          <p class="label">Повторите пароль</p>
          <q-input
            v-model.trim="form.repeatPassword"
            :type="isPasswordHidden ? 'password' : 'text'"
            placeholder="Пароль.."
            outlined
            no-error-icon
            :error="v$.repeatPassword.$error"
            @blur="v$.repeatPassword.$touch">
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
                v-for="error in v$.repeatPassword.$errors"
                :key="error"
              >
                {{passwordErrors[error.$message]}}
              </div>
            </template>
          </q-input>
        </div>
        <q-btn
          :disabled="v$.$invalid"
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
import { reactive, ref, computed } from 'vue'
import { useStore } from 'src/store'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, sameAs, minLength } from '@vuelidate/validators'
import { passwordErrors } from 'src/helpers/vuelidate'
import { Notify } from 'quasar'
import { ForgotPasswordProps } from 'components/constans'
export default {
  name: 'enter-password',
  props: {
    token: {
      type: String,
      required: true
    }
  },
  setup (props: ForgotPasswordProps) {
    const form = reactive({
      newPassword: '',
      repeatPassword: ''
    })
    const newPassword = computed(() => form.newPassword)
    const rules = {
      newPassword: { required, minLength: minLength(8) },
      repeatPassword: { required, sameAs: sameAs(newPassword), minLength: minLength(8) }
    }
    const store = useStore()
    const router = useRouter()
    const isPasswordHidden = ref<boolean>(true)
    const loading = ref<boolean>(false)
    const v$ = useVuelidate(rules, form)

    const onSubmitPassword = async () => {
      const formData = {
        password: form.newPassword,
        token: props.token
      }
      try {
        loading.value = true
        await store.dispatch('resetPassword', formData)
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
        message: 'Пароль успешно изменён.',
        timeout: 6000
      })
    }
    return {
      form,
      onSubmitPassword,
      isPasswordHidden,
      passwordErrors,
      v$,
      loading
    }
  }
}
</script>
