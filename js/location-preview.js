export class locationPrevie {
    constructor(id, info, onDeleteLoc, onUpdateLoc) {
        this.location = {
            id,
            info
        };
        this.onDeleteLoc = onDeleteLoc;
        this.onUpdateLoc = onUpdateLoc;
    }
    render() {
        var elLoc = document.createElement('tr');
        var strHtml = '';
        strHtml += `<td>${location.id}</td><td>${location.info}</td>`;
        elLoc.innerHTML = strHtml;
        var elAction =document.createElement('td');
        elAction.classList.add('action');
        elLoc.innerHTML += elAction;
        var elBtnDelete = document.createElement('button');
        elBtnDelete.classList.add('btn-delete');
        elBtnDelete.innerHTML = 'Delete';
        elBtnDelete.addEventListener('click', (ev)=>{
            console.log('Hey', location.id);
            this.onDeleteTodo(location.id, ev)
        })
        elLoc.innerHTML += elBtnDelete;
        elBtnUpdate.classList.add('btn-Update');
        elBtnUpdate.innerHTML = 'Update';
        elBtnUpdate.addEventListener('click', (ev)=>{
            console.log('Hey', location.id);
            this.onDeleteTodo(location.id, ev)
        })
        elLoc.innerHTML += elBtnUpdate;
        return elLoc;
    }
}