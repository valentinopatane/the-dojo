
/*INDICE DE MASA CORPORAL*/
window.onload = iniciar;

let pesoInput = document.getElementById("peso");
let alturaInput = document.getElementById("altura");

function iniciar(){
    let calcular = document.getElementById("calcular");
    calcular.addEventListener("click", ()=>{
        if(pesoInput.value === "" || alturaInput.value === "" || alturaInput.value > 2.5 || alturaInput.value < 1){
            alert("Error: Debe ingresar los datos correspondientes para realizar el cálculo.")
        }else{
            imcCalc();
        }
    });
}
function imcCalc(){
    let peso = pesoInput.value;
    let altura = alturaInput.value;

    let imc = peso / (altura * altura);

    let resultadoIMC = `<p>Su índice de masa corporal es: ${Math.round(imc)} </p>`

    clearInputIMC();

    $('.showIMC').empty();

    $('.showIMC').toggle("resultadoIMC");

    $('.showIMC').append(resultadoIMC);
}

function clearInputIMC(){
    $("#peso").val("");
    $("#altura").val("");
}


/*CUENTA CALORIAS*/

const form = document.getElementById("form");
form.addEventListener('submit',noRefresh);

function noRefresh(event){
    event.preventDefault();

    const gender = selectImput('gender');
    const age = parseToNumber('age');
    const weight = parseToNumber('weight');
    const height = parseToNumber('height');

    if(gender === "" || age === 0 || weight === 0 || height === 0){
        alert("No ingresó los datos correspondientes")
    }else{
        activity = selectImput('activityLevel');
    }
    if (gender === 'female'){
        tmbResult = (655+(9.6*weight)+(1.8*height)-(4.7 *age))
    }else if(gender === 'male'){
        tmbResult = (66+(13.7 * weight)+(5*weight)-(6.8*age))
    }
    const tmb = Math.round(tmbResult);

    const mantenerPeso = Math.round(tmb * Number(activity));
    const perderPeso = mantenerPeso - 450;
    const ganarPeso = mantenerPeso + 450;

    const modificacionDOM = `<h4 style= "margin-top: 5px;">El resultado es el siguiente:<h4>
    <div class="resultContenido">
        <ul>
            <li>
                Su metabolismo basal es de <strong>${tmb} calorías </strong>
            </li>
            <li>
                Para mantener su peso deberá consumir <strong>${mantenerPeso} calorías </strong>
            </li>
            <li>
                Para bajar de peso deberá consumir <strong>${perderPeso} calorías </strong>
            </li>
            <li>
                Para subir de peso deberá consumir <strong>${ganarPeso} calorías </strong>
            </li>
        </ul>
    </div>
    `
    const result = document.getElementById('result');
    result.innerHTML = modificacionDOM;
}

function selectImput(id){
    const select= document.getElementById(id);
    return select.options[select.selectedIndex].value;
}
function parseToNumber(id){
    return Number(document.getElementById(id).value)
}
