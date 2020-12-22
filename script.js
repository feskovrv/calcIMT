let weight = document.querySelector('.weight');
let height = document.querySelector('.height');
let result = document.querySelector('.result__value');
let resultDiscription = document.querySelector('.result__discription');
let weightValue = '';
let heightValue = '';
weight.oninput = (e) => {
    if (e.data >= 0 && e.data != ' ') {
        weightValue = e.target.value;
    } else {
        e.target.value = weightValue;
    }

    if (height.value != '' & weight.value != '') {
        let IMT = calculateImt();
        result.textContent = IMT[0].toFixed(2);
        resultDiscription.textContent = IMT[1];
        if (IMT[1] == 'Норма') {
            resultDiscription.setAttribute('style', 'color: green');
        } else {
            resultDiscription.setAttribute('style', 'color: red');
        }
    }

}
height.oninput = (e) => {
    if (e.data >= 0 && e.data != ' ') {
        heightValue = e.target.value;
    } else {
        e.target.value = heightValue;
    }

    if (height.value != '' & weight.value != '') {
        let IMT = calculateImt();
        result.textContent = IMT[0].toFixed(2);
        resultDiscription.textContent = IMT[1];
        if (IMT[1] == 'Норма') {
            resultDiscription.setAttribute('style', 'color: green');
        } else {
            resultDiscription.setAttribute('style', 'color: red');
        }
    }

}

function calculateImt() {
    let result = weight.value / (height.value / 100) ** 2;
    if (result <= 16) {
        return [result, 'Выраженный дефицит массы тела'];
    } else if (result > 16 && result <= 18.5) {
        return [result, 'Недостаточная (дефицит) масса тела'];
    } else if (result > 18.5 && result <= 25) {
        return [result, 'Норма'];
    } else if (result > 25 && result <= 30) {
        return [result, 'Избыточная масса тела (предожирение)'];
    } else if (result > 30 && result <= 35) {
        return [result, 'Ожирение'];
    } else if (result > 35 && result <= 40) {
        return [result, 'Ожирение резкое'];
    } else if (result > 40) {
        return [result, 'Очень резкое ожирение'];
    }
}