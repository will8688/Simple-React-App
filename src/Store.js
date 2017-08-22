class Store {
    constructor(data){
        this.xmlhttp = new XMLHttpRequest();
    }
    get fetch(){
        return new Promise((resolve, reject) => {
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    const data = JSON.parse(this.responseText);
                    resolve(data);
                }else if (this.status === 404){
                    reject(this.status);
                }
            };
            xmlhttp.open('GET', 'event.json');
            xmlhttp.setRequestHeader('Content-Type', 'application/json');
            xmlhttp.send();

        
        });
    }
    set reserve(data){
        return new Promise((resolve, reject) => {
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    const data = JSON.parse(this.responseText);
                    resolve(data);
                }else if (this.status === 404){
                    reject(this.status);
                }
            };
            xmlhttp.open('POST', 'reserve.perl');
            xmlhttp.setRequestHeader('Content-Type', 'application/json');
            xmlhttp.send(JSON.stringify(data));

        
        });
    }
}
const Singlton = new Store();
export {Singlton as  Store};