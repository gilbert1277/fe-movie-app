<template>
  <q-page padding>
    <q-table
      flat bordered
      title="Data Genre"
      :rows="rows"
      :columns="columns"
      row-key="idGenre"
    >
      <template v-slot:top-right>
          <q-btn label="Tambah" icon="add" color="primary" unelevated no-caps />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="namaGenre" :props="props">
            {{ props.row.namaGenre }}
          </q-td>
          <q-td key="aksi" :props="props">
            aksi
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-dialog
      v-model="medium"
    >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Tambah/Edit Genre</div>
        </q-card-section>

        <q-card-section>
          <q-form>
            input genre
          </q-form>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>
<script setup>
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';

  const columns = [
    {name: 'namaGenre', label: 'Nama Genre', field: 'namaGenre', align: 'left'},
    {name: 'aksi', label: 'Aksi', field: 'aksi', align:'left'},
  ]
  const rows = ref([])

  onMounted(() => getData())

  const getData = async () => {
    try {
      const res = await api.get('genre/all')
      rows.value = res.data.data
    } catch (error) {
      console.log(error)
    }
  }
</script>
