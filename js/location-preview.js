export class locationPrevie {
    constructor(id, info,weather, onDeleteLoc = {}, onUpdateLoc = {}) {
        this.location = {
            id,
            info,
            weather
        };
        this.onDeleteLoc = onDeleteLoc;
        this.onUpdateLoc = onUpdateLoc;
    }
    render() {
        var elLoc = document.createElement('tr');
        var strHtml = '';
        strHtml += `<td>${this.location.id}</td><td>${this.location.info.lat}  ${this.location.info.lng}</td><td>${this.location.weather}</td>`;
        elLoc.innerHTML = strHtml;
        var elAction =document.createElement('td');
        elAction.classList.add('action');
        var elBtnDelete = document.createElement('button');
        elBtnDelete.classList.add('btn-delete');
        elBtnDelete.innerHTML = 'Delete';
        elBtnDelete.addEventListener('click', (ev)=>{
            console.log('Hey', this.location.id);
            this.onDeleteTodo(this.location.id, ev)
        })
        var elBtnUpdate = document.createElement('button');
        elBtnUpdate.classList.add('btn-Update');
        elBtnUpdate.innerHTML = 'Update';
        elBtnUpdate.addEventListener('click', (ev)=>{
            console.log('Hey', this.location.id);
            this.onDeleteTodo(this.location.id, ev)
        })
        elAction.appendChild(elBtnUpdate);
        elAction.appendChild(elBtnDelete);
        elLoc.appendChild(elAction);;
        return elLoc;
    }
}