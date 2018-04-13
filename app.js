document.querySelector('#button1').addEventListener('click', getCustomer);
document.querySelector('#button2').addEventListener('click', getCustomers);

function getCustomer(){
    const xml = new XMLHttpRequest();

    xml.open('GET', 'customer.json', true);

    xml.onload = function(){
        if(this.status === 200){
            console.log(1);
            
            const customer = JSON.parse(this.responseText);
            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Tel: ${customer.tel}</li>
            </ul>
            `;

            document.querySelector('#customer').innerHTML = output;
        }
    }

    xml.send();
}

//get customers

function getCustomers(){
    const xml = new XMLHttpRequest();

    xml.open('GET', 'customers.json', true);

    xml.onload = function(){
        if(this.status === 200){
            
            const customers = JSON.parse(this.responseText);

            let output = [];

            customers.forEach(customer => {
                
                if(customer.id >= 2)
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Tel: ${customer.tel}</li>
                </ul>
                `;
            });

            document.querySelector('#customers').innerHTML = output;
        }
    }

    xml.send();
}