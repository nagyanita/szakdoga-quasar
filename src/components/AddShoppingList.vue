<template>
  <q-modal ref="addShoppingListModal">
    <h6 class="on-right">Új bevásárló lista</h6>

    <div class="fields">
      <q-field>
        <q-input v-model="shoppingList" type="textarea" />
      </q-field>
    </div>

    <div class="row justify-around buttons">
      <q-btn color="primary" @click="$refs.addShoppingListModal.close()">Mégse</q-btn>
      <q-btn color="indigo-7" @click="addShoppingList">Hozzáadás</q-btn>
    </div>
  </q-modal>
</template>

  <script>
    import {
      QModal,
      QField,
      QInput,
      QBtn,
    } from 'quasar';

    import moment from 'moment';

    export default {
      data() {
        return {
          shoppingList: '',
        };
      },
      methods: {
        open() {
          this.shoppingList = moment(new Date()).format('YYYY-MM-DD');
          this.$refs.addShoppingListModal.open();
        },
        addShoppingList() {
          console.log(this.shoppingList);
        },
      },
      components: {
        QModal,
        QField,
        QInput,
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
