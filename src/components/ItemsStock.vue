<template>
  <div>
    <h6 class="on-right">Otthoni készlet</h6>

    <q-data-table :data="table" :config="config" :columns="columns">
      <template slot="col-add" scope="cell">
        <q-btn color="indigo-7" small @click="addToShoppingList(cell.row)">Hozzáadás bev.listához</q-btn>
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
  /* eslint arrow-body-style: ["error", "always"] */

  import {
    QDataTable,
    QBtn,
    Dialog,
    Alert,
  } from 'quasar';

  import moment from 'moment';

  import AddItemModal from './AddItem.vue';

  const tableConfig = {
    noHeader: false,
    leftStickyColumns: 0,
    rightStickyColumns: 0,
    rowHeight: '50px',
    responsive: true,
    messages: {
      noData: 'Nincs itthon semmi sem.',
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
    field: 'units',
    width: '80px',
  }, {
    label: 'Szavatossági idő',
    field: 'warranty',
    width: '80px',
    format(value) {
      if (value) {
        return moment(value).format('YYYY-MM-DD');
      }
      return 'nincs megadva';
    },
  }, {
    label: '',
    field: 'add',
    width: '20px',
  }];

  export default {
    data() {
      return {
        loading: false,
        config: tableConfig,
        columns: tableColumns,
        addItem: {
          shoppingList: '',
          quantity: null,
          units: '',
        },
        expiredItems: [],
      };
    },
    created() {
      this.$store.dispatch('setItemsRef');
      this.$store.dispatch('setShoppingListsRef');
      this.$store.dispatch('setFirstListRef');
      this.$store.dispatch('setSecondListRef');

      this.table.forEach((elem) => {
        if (elem) {
          if (elem.warranty && moment(elem.warranty).isBefore(moment(new Date()))) {
            this.expiredItems.push(elem.name);
          }
        }
        return '';
      });

      if (this.expiredItems.length) {
        const alert = Alert.create({
          enter: 'bounceInRight',
          leave: 'bounceOutRight',
          color: 'negative',
          icon: 'warning',
          html: `Lejártak az alábbi termékek szav.idejei: ${this.expiredItems}`,
          position: 'top-right',
        });

        setTimeout(() => {
          alert.dismiss();
        }, 3000);
      }
    },
    methods: {
      addToShoppingList(item) {
        console.log(item);
        const message = `
        Melyik bevásárló listához adjuk hozzá?
          `;

        const dialog = Dialog.create({
          title: 'Mennyi kell belőle?',
          message,
          form: {
            shoppingLists: {
              type: 'radio',
              model: this.addItem.shoppingList,
              items: this.shoppingLists,
            },
            quantity: {
              type: 'number',
              label: 'Mennyiség',
              model: this.addItem.quantity,
            },
            units: {
              type: 'text',
              label: 'Mértékegység',
              model: item.units,
            },

          },
          buttons: [{
            label: 'Vissza',
            color: 'primary',
            handler() {
              const timeout = setTimeout(() => {
                clearInterval(timeout);
                dialog.close();
              }, 3000);

              clearTimeout(timeout);
            },
          }, {
            label: 'Hozzáadás',
            color: 'indigo-7',
            handler: (data) => {
              this.loading = true;
              console.log(data);
              if (this.$store.state.shoppingLists.find((o) => {
                return o['.key'] === data.shoppingLists;
              })) {
                const ref = `${data.shoppingLists}Ref`;

                this.$store.state[`${ref}`].push({
                  name: item.name,
                  quantity: data.quantity,
                  units: data.units,

                });
              }
            },
          }],
        });

        /* this.shoppingListsRef.push({
          key: new Date().getTime(),
          name: elem.name,
          quantity: elem.quantity,
          units: elem.units,
        }); */
      },
    },
    computed: {
      table() {
        return this.$store.state.items;
      },
      shoppingLists() {
        const shoppingLists =
          this.$store.state.shoppingLists
            .map((value) => {
              const mappedValue = {
                label: `${value['.key']}`,
                value: value['.key'],
              };

              return mappedValue;
            });

        return shoppingLists;
      },
      shoppingListsRef() {
        return this.$store.state.shoppingListsRef;
      },
      firstListRef() {
        return this.$store.state.firstShoppingListRef;
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
