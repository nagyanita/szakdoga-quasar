<template>
  <div>
    <h6 class="on-right">
      Válassza ki, hogy mit szeretne:
    </h6>
    <div class="row justify-around">
      <q-btn class="cards" @click="$refs.addItemModal.open()">
        <q-icon name="add" />
        <small class="text-center">Hozzáadok valamit az otthoni készlethez</small>
      </q-btn>
      <q-btn class="cards" @click="$router.push('/items-stock')">
        <q-icon name="remove red eye" />
        <small class="text-center">Megnézem, mi van itthon</small>
      </q-btn>
      <q-btn class="cards">
        <q-icon name="create" />
        <small class="text-center">Jegyzeteket írok</small>
      </q-btn>
      <q-btn class="cards">
        <q-icon name="event note" />
        <small class="text-center">Megnézem a bevásárlólistá(i)m</small>
      </q-btn>
    </div>

    <add-item-modal ref="addItemModal" />
  </div>
</template>

<script>
  import {
    QBtn,
    QIcon,
  } from 'quasar';

  import AddItemModal from './AddItem.vue';

  export default {
    data() {
      return {};
    },
    components: {
      QBtn,
      QIcon,
      AddItemModal,
    },
  };

</script>

<style scoped>
  .cards {
    width: 130px !important;
    height: 130px !important;
    padding: 10px !important;
    margin-top: 20px;
  }

</style>
