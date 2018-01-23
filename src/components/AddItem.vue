<template>
  <q-modal ref="addItemModal">
    <h6 class="on-right">Új termék hozzáadása</h6>

    <div class="fields">
      <q-field label="Név">
        <q-input v-model="item.name" />
      </q-field>

      <q-field label="Vonalkód">
        <q-input
          v-model="item.barcode"
          max-length="13"
        />
      </q-field>

      <q-field label="Mennyiség">
        <q-input type="number" v-model="item.quantity" />
      </q-field>

      <q-field label="Mértékegység">
        <q-input v-model="item.unit" />
      </q-field>

      <q-field label="Szavatossági idő">
        <q-datetime
          monday-first
          v-model="item.warranty"
          type="date"
          ok-label="Ok"
          no-clear
          :day-names="days"
          :month-names="months"
          cancel-label="Mégse" />
      </q-field>
    </div>

    <div class="row justify-around buttons">
      <q-btn color="primary" @click="$refs.addItemModal.close()">Mégse</q-btn>
      <q-btn color="indigo-7" @click="addItem">Hozzáadás</q-btn>
    </div>
  </q-modal>
</template>

<script>
  import {
    QModal,
    QField,
    QInput,
    QDatetime,
    QBtn,
  } from 'quasar';

  export default {
    data() {
      return {
        item: {
          name: '',
          barcode: '',
          quantity: null,
          unit: '',
          warranty: '',
        },
        days: [
          'V',
          'H',
          'K',
          'Sze',
          'Cs',
          'P',
          'Szo',
        ],
        months: [
          'Január',
          'Február',
          'Március',
          'Április',
          'Május',
          'Június',
          'Július',
          'Augusztus',
          'Szeptember',
          'Október',
          'November',
          'December',
        ],
      };
    },
    methods: {
      open() {
        this.item = {};
        this.$refs.addItemModal.open();
      },
      addItem() {
        console.log(this.item);
      },
    },
    components: {
      QModal,
      QField,
      QInput,
      QDatetime,
      QBtn,
    },
  };

</script>

<style scoped>
  .fields {
    width: 90%;
    margin: auto;
  }

  .buttons {
    margin-top: 30px;
  }

</style>
