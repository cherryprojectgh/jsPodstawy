var form = document.querySelector("#myForm"),
    fields = document.querySelectorAll("[data-error]");

function isNotEmpty(field) {
    return field.value !== "";
}

function isAtLeast(field, min) {
    return field.value.length >= min;
}

function isEmail(field) {
    return field.value.includes("@") === true;
}

// WYŚWIETLENIE BŁĘDU NA STRONIE
function displayErrors(errors) {
    var ul = document.querySelector("ul.errors"); //SPRAWDZANIE CZY NA STRONIE JEST UL Z ERRORARMI

    if (!ul) {
        ul = document.createElement("ul");
        ul.classList.add("errors");
    } // TWORZENIE ELEMENTU UL (JEŻELI NIE MA GO NA STRONIE)

    ul.innerHTML = "";

    errors.forEach(function (error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    }) // PĘTLA DODAJĄCE DO LISTY KOLEJNE ERRORY
form.parentNode.insertBefore(ul, form)
};






form.addEventListener("submit", function (e) {
    e.preventDefault(); //zablokowanie wysłania formularza

    var errors = [],
        isValid = false;

    for (var i = 0; i < fields.length; i++) {
        var field = fields[i];

        if (field.type === "text") {
            isValid = isNotEmpty(field);

        } else if (field.type === "email") {
            isValid = isEmail(field);

        } else if (field.type === "select-one") {
            isValid = isNotEmpty(field);


        } else if (field.type === "textarea") {
            isValid = isAtLeast(field, 5);
        }

        if (!isValid) {
            field.classList.add("error");
            errors.push(field.dataset.error);
        } else {
            field.classList.remove("error");
        }
    }

    if (errors.length) {
        displayErrors(errors);
    } else {
        form.submit();
    }

    console.log(errors)

}, false);
