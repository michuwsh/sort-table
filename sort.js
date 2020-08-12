const theadTd = document.querySelectorAll("thead td");
const tbodyTr = document.querySelectorAll("tbody tr");
const table = document.querySelector("#myTable")
makeArray = (nodeList)=>{
    let arr=[];
    for(let i=0; i<nodeList.length; i++) {
        arr.push(nodeList[i]);
    }
    return arr;
};
clearClass = () => {
    for(let i=0; i<theadTd.length; i++) {
        theadTd[i].className="";
    }
};

for(let i=0; i<theadTd.length; i++){
    theadTd[i].addEventListener('click', ()=>{
        if(theadTd[i].className==="") {
            clearClass();
            theadTd[i].classList.add('sort-up'); } else if(theadTd[i].className==="sort-up"){
            theadTd[i].classList.remove('sort-up')
            theadTd[i].classList.add('sort-down'); } else {
                theadTd[i].classList.add('sort-up');
                theadTd[i].classList.remove('sort-down')
            }
        let tbodyArr=makeArray(tbodyTr);
        let index = i;
        tbodyArr.sort(function(a, b) {

            let tdA = a.children[index].textContent,
                tdB = b.children[index].textContent;
    
            if(tdA < tdB) {
                return theadTd[i].className==="sort-up" ? -1 : 1;
            } else if(tdA > tdB) {
                return theadTd[i].className==="sort-up" ? 1 : -1;
            } else {
                return 0;
            }
        });
        let df = document.createDocumentFragment();
        tbodyArr.forEach((tr) => {
            df.appendChild(tr);
        });
        table.querySelector("tbody").appendChild(df);
});
}
