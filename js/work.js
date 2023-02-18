function calculateTwoValue(firstValue,secondValue) {
    const firstField = document.getElementById(firstValue)
    const firstValueString = firstField.value;
    const previosfirstValue = parseFloat(firstValueString);
    
    const secondField = document.getElementById(secondValue)
    const secondValueString = secondField.value;
    const previossecondValue = parseFloat(secondValueString); 

    const total=previosfirstValue*previossecondValue;
    return total;
}
function calculation(firstCal,secondCal){
    const displayfieldOfOutpt = document.getElementById('Calculation-output') ;

    const tr =document.createElement('tr') ;
    tr.innerHTML =`
        <td>${1}</td>
        <td>${firstCal}</td>
        <td> ${secondCal}</td>

    `;
    displayfieldOfOutpt.appendChild(tr);
}

document.getElementById('blog-btn').addEventListener('click', function(){
    
    window.location.href = './qustionAnswer.html'
})

document.getElementById('Triangle-calculate-btn').addEventListener('click', function(){
    const triangle=calculateTwoValue('Triangle-bed-field','Triangle-hight-field')   
    const TriangelTotal=triangle*.5;

    calculation('Triangel',TriangelTotal)

    
})