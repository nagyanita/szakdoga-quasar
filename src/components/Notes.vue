<template>
  <div>
    <h6 class="on-right">
      Jegyzetek
    </h6>

    <div class="row justify-center">
      <q-card inline v-for="note in notes" class="notes">
        <q-card-title>
          {{ note.create | moment }}
          <span slot="subtitle">{{ note.text }}</span>
        </q-card-title>
        <q-card-separator />
        <q-card-actions class="row justify-between">
          <q-btn flat class="text-negative" @click="removeNote(note['.key'])">Törlés</q-btn>
          <q-btn flat class="text-primary" @click="editNote(note)">Módosítás</q-btn>
        </q-card-actions>
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
    QCardSeparator,
    QCardActions,
    QIcon,
    QPopover,
    QList,
    QItem,
    QItemMain,
    QBtn,
    Dialog,
  } from 'quasar';

  import moment from 'moment';
  import {
    database,
  } from '../store';

  import AddNoteModal from './AddNote.vue';

  export default {
    data() {
      return {
        notes: [],
      };
    },
    firestore() {
      return {
        notes: database.collection('notes'),
      };
    },
    methods: {
      removeNote(note) {
        const dialog = Dialog.create({
          title: 'Biztosan törölni akarja?',
          buttons: [{
            label: 'Nem',
            handler() {
              const timeout = setTimeout(() => {
                clearInterval(timeout);
                dialog.close();
              }, 3000);

              clearTimeout(timeout);
            },
          },
          {
            label: 'Igen',
            raised: true,
            color: 'primary',
            handler() {
              this.notesRef.child(note).remove();
            },
          }],
        });
      },
      editNote(note) {
        const dialog = Dialog.create({
          form: {
            units: {
              type: 'text',
              label: 'Jegyzet',
              model: note.text,
            },

          },
          buttons: [{
            label: 'Mégsem',
            handler() {
              const timeout = setTimeout(() => {
                clearInterval(timeout);
                dialog.close();
              }, 3000);

              clearTimeout(timeout);
            },
          },
          {
            label: 'Módosítás',
            raised: true,
            color: 'primary',
            handler() {
              this.notesRef.child(note['.key']).child('text').set(note.text);
            },
          }],
        });
      },
    },
    filters: {
      moment(date) {
        return moment(date).format('YYYY-MM-DD');
      },
    },
    components: {
      QCard,
      QCardTitle,
      QCardSeparator,
      QCardActions,
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
