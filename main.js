class Main {
    conteiner;

    constructor(document) {
        this.conteiner = document;
    }

    render() {
        return  this.conteiner.innerHTML = "Ti si qk"
    }
}

document.addEventListener('DOMContentLoaded', (e) => {
    const app = document.getElementById('app');
    new Main(app).render();
})
