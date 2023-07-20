"use strict";

Vue.createApp({
  data() {
    return {
      messaggio: "Benvenuto su JS",
      titleClass: "text-success" + " " + "text-danger",
      titleId: "titolo",
      btnImg: "https://picsum.photos/200/300",
    };
  },
  methods: {
    stampFn() {
      this.messaggio = this.messaggio + " " + "BENVENUTO";
      this.cambiaColore("primary");
    },
    cambiaColore(colore) {
      let nuovoColore = "danger";
      if (colore) {
        nuovoColore = colore;
      }
      this.titleClass = "text-" + nuovoColore;
    },
  },
}).mount("#app");
