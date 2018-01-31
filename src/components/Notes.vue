<template>
  <div>
    <h6 class="on-right">
      Jegyzetek
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
        <q-card-main class="row justify-center">
          <q-item-main label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  label-lines="3"></q-item-main>
        </q-card-main>
      </q-card>
    </div>

    <div class="row justify-around button-container">
      <q-btn color="primary" @click="$router.push('/')">Vissza</q-btn>
      <q-btn color="indigo-7" @click="$refs.addNoteModal.open()">Jegyzet hozzáadása</q-btn>
    </div>

    <add-note-modal ref="addNoteModal" />
  </div>
</template>

<script>
  import {
    QCard,
    QCardTitle,
    QCardMain,
    QIcon,
    QPopover,
    QList,
    QItem,
    QItemMain,
    QBtn,
  } from 'quasar';

  import AddNoteModal from './AddNote.vue';

  export default {
    data() {
      return {};
    },
    components: {
      QCard,
      QCardTitle,
      QCardMain,
      QIcon,
      QPopover,
      QList,
      QItem,
      QItemMain,
      AddNoteModal,
      QBtn,
    },
  };

</script>

<style scoped>
.notes {
  width: 300px;
}

.button-container {
    margin-top: 20px;
  }

</style>
