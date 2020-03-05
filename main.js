class Main {
    conteiner;
    document;
    table;
    lastClick = "O";

    constructor(conteiner, document) {
        this.conteiner = conteiner;
        this.document = document;
        this.table = this.genarateTable(3, 3);
    }

    createElement(type, content) {
        let e = this.document.createElement(type);

        if (typeof content === "string") {
            e.innerHTML = content;
        }
        if (typeof content === "object") {
            e.appendChild(content);
        }
        return e;
    }

    createTd() {
        return this.createElement('td');
    }

    createTr() {
        return this.createElement('tr');
    }

    createTable() {
        return this.createElement('table');
    }

    handleClick(e) {
        if (e.target.innerHTML === '') {
            if (this.lastClick === 'O') {
                this.lastClick = 'X';
            } else {
                this.lastClick = 'O';
            }
            
            return e.target.innerHTML = this.lastClick;
        }
        return e.target.innerHTML;
    }

    genarateTable(rows, cols) {
        const table = this.createTable();
        for (let i = 0; i < rows; i++) {
            const tr = this.createTr();
            for (let x = 0; x < cols; x++) {
                const td = this.createTd();
                td.addEventListener('click', this.handleClick.bind(this));
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        return table;
    }

    render() {
        return this.conteiner.appendChild(this.table);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const conteiner = document.getElementById('app');
    const app = new Main(conteiner, document);
    app.render();
})
