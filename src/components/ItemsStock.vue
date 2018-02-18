<template>
  <div>
    <h6 class="on-right">Otthoni készlet</h6>

    <q-data-table :data="table" :config="config" :columns="columns">
      <template slot="col-add" scope="cell">
        <q-btn color="indigo-7" small @click="addToShoppingList(cell.row.id)">Hozzáadás bev.listához</q-btn>
      </template>
    </q-data-table>

    <div class="row justify-around button-container">
      <q-btn color="primary" @click="$router.push('/')">Vissza</q-btn>
      <q-btn color="indigo-7" @click="$refs.addItemModal.open()">Termék hozzáadása a készlethez</q-btn>
    </div>

    <add-item-modal ref="addItemModal" />
  </div>
</template>

<script>
  import {
    QDataTable,
    QBtn,
  } from 'quasar';

  import AddItemModal from './AddItem.vue';

  import firebase from '../plugins/firebase';

  const tableConfig = {
    noHeader: false,
    leftStickyColumns: 0,
    rightStickyColumns: 0,
    rowHeight: '50px',
    responsive: true,
    messages: {
      noData: 'Ehhez a rendeléshez még nem adott hozzá terméket.',
    },
    pagination: {
      rowsPerPage: 10,
      options: [5, 10, 30, 50],
    },
    labels: {
      all: 'Összes',
      rows: 'Oldalanként',
    },
  };
  const tableColumns = [{
    label: '',
    field: 'edit',
    width: '20px',
  }, {
    label: '',
    field: 'image',
    width: '60px',
  }, {
    label: 'Név',
    field: 'name',
    width: '220px',
  }, {
    label: 'Vonalkód',
    field: 'barcode',
    type: 'number',
    width: '80px',
  }, {
    label: 'Mennyiség',
    field: 'quantity',
    type: 'number',
    width: '150px',
  }, {
    label: 'Mértékegység',
    field: 'unit',
    width: '80px',
  }, {
    label: 'Szavatossági idő',
    field: 'warranty',
    width: '80px',
  }, {
    label: '',
    field: 'add',
    width: '20px',
  }];

  export default {
    data() {
      return {
        table: [{
          img: '',
          name: 'liszt',
          barcode: '5993856819352',
          quantity: 10,
          unit: 'kg',
          warranty: '2018.01.31.',
        },
        {
          img: '',
          name: 'liszt',
          barcode: '5993856819352',
          quantity: 10,
          unit: 'kg',
          warranty: '2018.01.31.',
        },
        ],
        config: tableConfig,
        columns: tableColumns,
      };
    },
    methods: {
      addToShoppingList(elemId) {
        console.log(elemId);
        firebase.getItems();
      },
      getItem(item) {
        const shoppingItem = {
          name: item.name,
        };

        this.$firebaseRefs.shoppingLists.push(shoppingItem);
      },
    },
    components: {
      QDataTable,
      QBtn,
      AddItemModal,
    },
  };

</script>

<style scoped>
  .button-container {
    margin-top: 20px;
  }

</style>
