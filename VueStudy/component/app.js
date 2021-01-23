const images = [
    {
        "path": "img/Countryside.jpg",
        "caption": "ITで地方に貢献したいです"
    },
    {
        "path": "img/Countryside.jpg",
        "caption": "ITで地方に貢献したいです"
    }
];


Vue.component('alert-box', {
    template: `
    <div class = "alert">
        <strong>Error!</strong>
        <slot></slot>
    </div>
    `
});

Vue.component('back-img', {
    template: `
    <div class = "Word">
        <slot></slot>
    </div>
    `
});

const app = new Vue({
    el: "#app",
      data: {
        Photos: []
    },
    created: function () {
        this.Photos = images;
    }
});