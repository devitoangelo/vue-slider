
const { createApp } = Vue

createApp({
    data() {
        return {
            intervalID: null,
            activeImage: 0,    //partiamo dalla prima immagine
            movie: {
                title: "Games",
                description: "Lorem ipsum, dolor sit ame tempore aliquid delenitit tempore aliquid deleniti autonsectetur adipisicing elit. Et temporibus volup dolor sit ame tempore aliquid delenitit tempore dolor sit ame tempore aliquid delenitit tempore aliquid.",
                images: [
                    "img/01.webp",
                    "img/02.webp",
                    "img/03.webp",
                    "img/04.webp",
                    "img/05.webp"
                ],

            }

        }
    },
    methods: {

        prev() {
            console.log("prev");
            this.activeImage--
            if (this.activeImage < 0) {
                this.activeImage = this.movie.images.length - 1
            }


        },
        next() {
            console.log("next");
            this.activeImage++
            if (this.activeImage === this.movie.images.length) {
                this.activeImage = 0;
            }
        },

        startAutoplay() {
            console.log(this.movie);
            this.intervalID = setInterval(() => {
                this.next()
            }, 3000)

        },

        stopAutoplay(){
            clearInterval(this.intervalID)

        }

        

        

    },
    mounted() {

        this.startAutoplay()

    }



}).mount("#app")








