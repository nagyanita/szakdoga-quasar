<template>
  <div>
    <h6 class="on-right">
      Bevásárló listá(i)m
      {{ lists }}
    </h6>

    <div class="row justify-center">
      <q-card inline class="notes" v-for="shoppingList in shoppingLists">
        <q-card-title>
          {{ shoppingList }}
          <q-icon slot="right" name="more_vert">
            <q-popover ref="popover">
              <q-list link class="no-border">
                <q-item @click="$refs.popover.close()">
                  <q-item-main label="Remove Card" />
                </q-item>
                <q-item @click="$refs.popover.close()">
                  <q-item-main label="Send Feedback" />
                </q-item>
                <q-item @click="$refs.popover.close()">
                  <q-item-main label="Share" />
                </q-item>
              </q-list>
            </q-popover>
          </q-icon>
        </q-card-title>
        <q-card-main class="row justify-start items">
          <q-list>
            <q-item>
              <q-icon name="shopping basket" />
              <span class="on-right" >-- shopping list item --</span>
            </q-item>
          </q-list>
        </q-card-main>
      </q-card>
    </div>

    <div class="row justify-around button-container">
      <q-btn color="primary" @click="$router.push('/')">Vissza</q-btn>
      <q-btn color="indigo-7" @click="$refs.addShoppingListModal.open()">Bev.lista létrehozása</q-btn>
    </div>

    <add-shopping-list-modal ref="addShoppingListModal" />

  </div>
</template>

<script>
  /* eslint arrow-body-style: ["error", "always"] */

  import {
    QCard,
    QCardTitle,
    QIcon,
    QPopover,
    QList,
    QItem,
    QItemMain,
    QCardMain,
    QListHeader,
    QItemSeparator,
    QBtn,
  } from 'quasar';

  import {
    database,
  } from '../store';

  import addShoppingListModal from './AddShoppingList.vue';

  export default {
    data() {
      return {
        shoppingLists: [],
      };
    },
    firestore() {
      return {
        shoppingLists: database.collection('shoppingLists'),
      };
    },
    computed: {
      lists() {
        const docRef = database.collection('shoppingLists').doc(this.shoppingLists['.key']).collection('firstList');

        docRef.get().then((doc) => {
          if (doc.exists) {
            console.log('Document data:', doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!');
          }
        }).catch((error) => {
          console.log('Error getting document:', error);
        });
      },
    },
    components: {
      QCard,
      QCardTitle,
      QIcon,
      QPopover,
      QList,
      QItem,
      QItemMain,
      QCardMain,
      QListHeader,
      QItemSeparator,
      QBtn,
      addShoppingListModal,
    },
  };

</script>

<style scoped>
  .notes {
    width: 300px;
  }

  .items {
    padding: 0px !important;
  }

  .q-card-container {
    padding: 8px !important;
  }

  .q-list {
    border: none !important;
  }

  .q-item {
    padding: 6px 16px !important;
  }

  .button-container {
    margin-top: 20px;
  }

</style>
