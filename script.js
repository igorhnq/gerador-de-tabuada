const multiplicationForm = document.querySelector('#multiplication-form');
const number = document.querySelector('#number');
const multiplicationInput = document.querySelector('#multiplicator');
const multiplicationTable = document.querySelector('#multiplication-table');

const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = '';

    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `
            <div class="row flex justify-center border-2 border-stone-900 border-b-transparent last:border-b-stone-900 p-1 w-60 my-0 mx-auto">
                <div class="operation">${number} x ${i} = </div>
                <div class="result ml-2">${result}</div>
            </div>
        `;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector('.row');

        multiplicationTable.appendChild(row)

    }
}

multiplicationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const multiplicationNumber = +number.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
})