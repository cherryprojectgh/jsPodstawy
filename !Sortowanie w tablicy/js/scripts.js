//UTWORZENIE ZMIENNYCH PRZECHWYTUJĄCYCH 
//PIERWSZY WIERSZ I POZOSTAŁE WIERSZE W TABELI
var table = document.querySelector("#myTable"),
    ths = table.querySelectorAll("thead th"),
    trs = table.querySelectorAll("tbody tr");

//FUNKCJA Z PARAMETREM - TWORZENIE TABLICY
function makeArray(nodeList) {
    var arr = [];
    for (var i = 0; i < nodeList.length; i++) {
        arr.push(nodeList[i])
    }
    return arr;
}

//FUNKCJA CZYSZCZĄCA KLASY W PIERWSZYM WIERSZU
function clearClassName(nodeList) {
    for (var i = 0; i < nodeList.length; i++) {
        nodeList[i].className = ""
    }
}

//FUNKCJA SORTOWANIA ELEMENTÓW W TABLICY
function sortBy(e) {
    var target = e.target,
        thsArray = makeArray(ths),
        trsArray = makeArray(trs),
        index = thsArray.indexOf(target),
        df = document.createDocumentFragment(),
        order = (target.className === "" || target.className === "desc") ? "asc" : "desc";

    clearClassName(ths);

    trsArray.sort(function (a, b) {
        if (index !== 2) {
            var tdA = a.children[index].textContent,
                tdB = b.children[index].textContent;

            if (tdA < tdB) {
                return order === "asc" ? -1 : 1;
            } else if (tdA > tdB) {
                return order === "asc" ? 1 : -1;
            } else {
                return 0
            }

        } else {
            var tdA = parseInt(a.children[index].textContent),
                tdB = parseInt(b.children[index].textContent);

            if (tdA < tdB) {
                return order === "asc" ? -1 : 1;
            } else if (tdA > tdB) {
                return order === "asc" ? 1 : -1;
            } else {
                return 0
            }
        }
    });

    trsArray.forEach(function (tr) {
        df.appendChild(tr);
    });
    target.className = order;
    table.querySelector("tbody").appendChild(df);
}

for (var i = 0; i < ths.length; i++) {
    ths[i].onclick = sortBy;
}
