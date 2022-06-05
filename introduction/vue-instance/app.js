const app = Vue.createApp({
    data(){ // degiskenleri tanimladigimiz property
        return {
            title:"vue practices",
            description: "p elemet description",
            gitHubLink: {
                href:"https://github.com/tugrankenger",
                urlText:"gitHub tugrankenger",
                target:"_blank",
                alt: "GitHub Link"
            },
            personalization:"created a new custom attribute",
            coords:{
                x:0,
                y:0,
            }
        };
    },
    methods:{ // metodlar ve fonksiyonlari icerir
        changeTitle(pTitle){
            //alert();
            this.title = pTitle
        },
        updateCoords(message, e){
            //console.log(message, e.clientX, e.clientY)
            this.changeTitle(`${e.x}, ${e.y}`)
            this.coords.x = e.x;
            this.coords.y = e.y;
        }
    }
}).mount("#app"); // yukaridaki vuejs uygulamasi id'si app olan element icinde calisacaktir.