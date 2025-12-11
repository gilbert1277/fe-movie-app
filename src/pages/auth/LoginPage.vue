<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="row">
          <div class="col-md-4 fixed-center col-xs-12">
            <q-card class="my-card">
              <q-card-section>
                <div class="text-h5 text-primary">Login</div>
                <div>Masukkan Username dan Password</div>
                <q-form @submit="onSubmit">
                  <q-input
                    v-model="username"
                    label="Masukkan Username"
                    dense
                    outlined
                    :rules="[val => val !== '' || 'Mohon Isi Username']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="person" />
                    </template>
                  </q-input>
                  <q-input
                    v-model="password"
                    label="Masukkan Password"
                    dense
                    outlined
                    :rules="[val => val !== '' || 'Mohon Isi Password']"
                    type="password"
                  >
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                  </q-input>
                    <q-btn
                      color="primary"
                      label="Login"
                      no-caps
                      unelevated
                      type="submit"
                      class="full-width"
                    />
                    <q-btn
                      outline style="color: goldenrod;"
                      label="Registrasi"
                      no-caps
                      unelevated
                      class="full-width q-mt-sm"
                      :to="{name: 'registerPage'}"
                    />
                </q-form>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('')
const password = ref('')
const q = useQuasar()
const router = useRouter()

const onSubmit = async () => {
  try {
    const res = await api.post('users/login', {
      username: username.value,
      password: password.value
    })
    console.log(res.data)
    q.notify({
      message: res.data.message,
      type:'positive'
    })
    router.push({
      name: 'dashboardAdmin'
    })
  } catch (error) {
    console.log(error)
    q.notify({
      message: error.response.data,
      type:'negative'
    })
  }
}
</script>
