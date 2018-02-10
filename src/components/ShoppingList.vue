<template>
  <div>
    <h6 class="on-right">
      Bevásárló listá(i)m
    </h6>

    <div class="row justify-center">
      <q-card inline class="notes">
        <q-card-title>
          Dátum
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
              <q-icon  name="shopping basket" />
                <span class="on-right">Folders</span>
            </q-item>
            <q-item>
              <q-icon  name="shopping basket" />
                <span class="on-right">Folders</span>
            </q-item>
            <q-item>
              <q-icon  name="shopping basket" />
                <span class="on-right">Folders</span>
            </q-item>
            <q-item>
              <q-icon  name="shopping basket" />
                <span class="on-right">Folders</span>
            </q-item>
          </q-list>
        </q-card-main>
      </q-card>
    </div>

    <div class="row justify-around button-container">
      <q-btn color="primary" @click="$router.push('/')">Vissza</q-btn>
    </div>

  </div>
</template>

<script>
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

  export default {
    data() {
      return {};
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
