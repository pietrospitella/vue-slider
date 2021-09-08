// Bonus:
// * Creare il navigatore in basso con i pallini bianchi (blu se corrispondente all'immagine attualmente visualizzata)
// * Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
      counterPhoto : 0,
      photos: [
        "img/image1.jpg",
        "img/image2.jpg",
        "img/image3.jpg",
        "img/image4.jpg",
      ],
    },
    mounted() {
        this.scrollPhotos();
    },
    methods: {
      prevPhoto() {
        this.counterPhoto -= 1;
        if (this.counterPhoto < 0) {
          this.counterPhoto = (this.photos.length - 1)
        };
      },
      nextPhoto() {
        this.counterPhoto += 1;
        if (this.counterPhoto == (this.photos.length)) {
          this.counterPhoto = 0;
        };        
      },
      scrollPhotos() {
          this.counterPhoto = setInterval(this.nextPhoto, 3000);
      }
    }
  })
  