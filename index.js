function calculateBMI (weight,height){
    height = document.getElementById('height');
    weight = document.getElementById('weight');
    const heightPower = Math.pow(+height.value, 2);
    const BMI = ((+weight.value / heightPower) * 10000).toFixed(1);
    //в задании сказано округлить результат до двух десятитысччных знаков с помощью Math,round(), но тогда результат округляется либо до 0 либо до 1, а в расшифровке результатов даны значения от 18.5 и выше
    const result = document.querySelector('.result');
    result.innerText = `Ваш индекс массы тела (ИМТ): ${BMI}`;

    let message = document.querySelector('.message');
    if (BMI < 18.5) {
        message.innerText = 'Недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем.';
    }
    if (BMI > 18.51 & BMI < 24.9) {
        message.innerText = 'Нормальный вес. В этом диапазоне считается, что вес находится в здоровых пределах.';
    }
    if (BMI > 25.0 & BMI < 29.9) {
        message.innerText = 'Избыточный вес. В этой категории есть некоторый риск развития связанных с ожирением заболеваний.';
    }
    if (BMI > 30 & BMI < 34.9) {
        message.innerText = 'Ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.';
    }
    if (BMI > 35 & BMI < 39.9) {
        message.innerText = 'Ожирение II степени. Риск развития серьезных заболеваний, таких как диабет и сердечно-сосудистые заболевания, очень высок.';
    }
    if (BMI > 40) {
        message.innerText = 'Тяжелое ожирение (ожирение III степени). Высокий риск развития серьезных заболеваний и осложнений.';
    }
}

const button = document.querySelector('.calculate');
button.addEventListener('click', calculateBMI);
