<template>
  <div>
    <h6>
      Válassza ki, hogy mit szeretne:
    </h6>
    <div class="row justify-around">
      <q-btn icon="add" class="cards">
        <small class="text-center">Hozzáadok valamit az otthoni készlethez</small>
      </q-btn>
      <q-btn icon="remove red eye" class="cards">
        <small class="text-center">Megnézem, mi van itthon</small>
      </q-btn>
      <q-btn icon="create" class="cards">
        <small class="text-center">Jegyzeteket írok</small>
      </q-btn>
      <q-btn icon="event note" class="cards">
        <small class="text-center">Megnézem a bevásárlólistá(i)m</small>
      </q-btn>
    </div>
  </div>
</template>

<script>
import {
  QBtn,
} from 'quasar';

export default {
  data() {
    return {};
  },
  components: {
    QBtn,
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
