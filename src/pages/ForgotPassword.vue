<template>
  <q-page>
    <enter-email v-if="!token"/>
    <enter-password v-else :token="token" />
  </q-page>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, LocationQueryValue } from 'vue-router'
import EnterEmail from 'components/ForgotPassword/EnterEmail.vue'
import EnterPassword from 'components/ForgotPassword/EnterPassword.vue'

export default {
  name: 'forgot-password',
  components: {
    EnterEmail,
    EnterPassword
  },
  setup () {
    const token = ref<string | null>('')
    const route = useRoute()

    onMounted(() => {
      if (route.query.resetPassword) {
        token.value = route.query.resetPassword as LocationQueryValue
      }
    })
    return {
      token
    }
  }
}
</script>
