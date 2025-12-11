<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="row">
          <div class="col-md-4 col-xs-12 fixed-center ">
            <q-card class="my-card">
              <q-card-section>
                <div class="text-h5 text-primary">Registrasi</div>
                <div class="q-mb-sm q-mt-xs">Daftar akun anda sekarang</div>
                <q-form @submit="onSubmit">
                  <q-input
                    v-model="username"
                    label="Masukkan Username"
                    dense
                    outlined
                    :rules="[
                    val => val !== '' || 'Kolom tidak boleh kosong'
                    ]"
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
                    type="password"
                    :rules="[
                    val => val !== '' || 'Kolom tidak boleh kosong'
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                  </q-input>
                  <q-input
                    v-model="namaLengkap"
                    label="Masukkan Nama Lengkap"
                    dense
                    outlined
                    :rules="[
                    val => val !== '' || 'Kolom tidak boleh kosong'
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="badge" />
                    </template>
                  </q-input>
                  <q-input
                    v-model="email"
                    label="Masukkan Email"
                    dense
                    outlined
                    :rules="[
                    val => val !== '' || 'Kolom tidak boleh kosong'
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="mail" />
                    </template>
                  </q-input>
                  <q-input
                    v-model="noTelp"
                    label="Masukkan No Telpon"
                    dense
                    outlined
                    :rules="[
                    val => val !== '' || 'Kolom tidak boleh kosong'
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="call" />
                    </template>
                  </q-input>
                  <q-btn
                    class="full-width"
                    color="primary"
                    label="Registrasi"
                    unelevated
                    no-caps
                    type="submit"
                  />
                  <q-btn
                    class="full-width q-mt-sm"
                    color="primary"
                    label="Login"
                    unelevated
                    outline
                    no-caps
                    icon="input"
                    :to="{
                      name: 'LoginPage'
                    }"
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
const namaLengkap = ref('')
const email = ref('')
const noTelp = ref('')
const q = useQuasar()
const router = useRouter()

const onSubmit = async () => {
  try {
    const res = await api.post('users/register',{
      username: username.value,
      password: password.value,
      nama: namaLengkap.value,
      noTelp: noTelp.value,
      email: email.value
    })
    q.notify({
      type: 'positive',
      message: res.data.message
    })
    router.push({
      name: 'loginPage'
    })

  } catch (error) {
    console.log(error)
    q.notify({
      type: 'negative',
      message: error.response.data
    })
  }
}
</script>
