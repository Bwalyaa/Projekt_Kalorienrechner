function calcGrundumsatz() {

    event.preventDefault();

    let weight = +document.querySelector("#weight").value;
    let height = +document.querySelector("#height").value;
    let age = +document.querySelector("#age").value;
    let result = document.querySelector(".output");
    let genderMale = document.querySelector("#männlich").checked;
    let genderFemale = document.querySelector("#weiblich").checked;
    let palFactor = document.querySelector("#pal").value;

    if (genderMale) {
        let grundumsatz = 66.47 + (13.7 * weight) + (5 * height) - (6.8 * age);
        let gesamtumsatz = grundumsatz * palFactor;

        result.innerHTML = `Dein Grundumsatz beträgt ${grundumsatz.toFixed(2)} Kcal pro Tag.`;
        result.innerHTML += `<br>Dein Gesamtumsatz beträgt ${gesamtumsatz.toFixed(2)} Kcal pro Tag.`;

    } else if (genderFemale) {
        let grundumsatz = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        let gesamtumsatz = grundumsatz * palFactor;

        result.innerHTML = `Dein Grundumsatz beträgt ${grundumsatz.toFixed(2)} Kcal pro Tag.`;
        result.innerHTML += `<br>Dein Gesamtumsatz beträgt ${gesamtumsatz.toFixed(2)} Kcal pro Tag.`;

    } else {
        result.textContent = "Bitte wähle dein Geschlecht aus.";
    }
}

 