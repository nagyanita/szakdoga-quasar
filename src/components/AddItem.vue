<template>
  <q-modal ref="addItemModal">
    <h6 class="on-right">Új termék hozzáadása</h6>

    <div class="fields">
      <q-field label="Név">
        <q-input v-model="item.name" />
      </q-field>

      <q-field label="Vonalkód">
        <q-input
          type="number"
          v-model="item.barcode"
          max-length="13"
          :after="[{icon: 'fa-barcode', handler () { openBarcodeReader() }}]"
        />
      </q-field>

      <q-field label="Mennyiség">
        <q-input type="number" v-model="item.quantity" />
      </q-field>

      <q-field label="Mértékegység">
        <q-input v-model="item.units" />
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
  /* eslint no-alert: "error" */
  import {
    QModal,
    QField,
    QInput,
    QDatetime,
    QBtn,
  } from 'quasar';

  const barcodeURL =
    `zxing://scan/?ret=${encodeURIComponent(window.location.origin)}%2F%3FfindBy%3Dbarcode%26page%3D1%26stockedOnly%3Dfalse%26searchValue%3D%7BCODE%7D&SCAN_FORMATS=UPC_A,UPC_E,EAN_8,EAN_13,CODE_39,CODE_93,CODE_128,CODEBAR`;

  export default {
    data() {
      return {
        barcodeURL,
        item: {
          name: '',
          barcode: '',
          quantity: null,
          units: '',
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
        if (this.item) {
          this.itemsRef.push(this.item);
        }
        this.$refs.addItemModal.close();
      },
      openBarcodeReader() {
        const that = this;
        cordova.plugins.barcodeScanner.scan(
          (result) => {
            // alert(`Result: ${result.text}`);
            that.$emit('input', result.text);
          },
          () => {
            // alert(`Scanning failed: ${error}`);
          },
          {
            preferFrontCamera: false, // iOS and Android
            showFlipCameraButton: true, // iOS and Android
            showTorchButton: true, // iOS and Android
            torchOn: true, // Android, launch with the torch switched on (if available)
            prompt: 'Place a barcode inside the scan area', // Android
            resultDisplayDuration: 500,
            // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats: 'BAR_CODE,PDF_417', // default: all but PDF_417 and RSS_EXPANDED
            orientation: 'landscape', // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations: true, // iOS
            disableSuccessBeep: false, // iOS
          },
        );
      },
    },
    computed: {
      itemsRef() {
        return this.$store.state.itemsRef;
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
