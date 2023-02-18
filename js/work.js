

document.getElementById('blog-btn').addEventListener('click', function(){
    
    window.location.href = './qustionAnswer.html'
})

document.getElementById('Triangle-calculate-btn').addEventListener('click', function(){
    const trianglebedField = document.getElementById('Triangle-bed-field')
    const trianglebedValueString = trianglebedField.value;
    const previosTringelbedValue = parseFloat(trianglebedValueString);
    
    const trianglehightField = document.getElementById('Triangle-hight-field')
    const trianglehightValueString = trianglehightField.value;
    const previosTringelhightValue = parseFloat(trianglehightValueString); 

    const total=previosTringelbedValue*previosTringelhightValue;
    const TriangelTotal=total*.5;

    const btnUse=document.getElementById('blog-btn')


    const displayfieldOfOutpt = document.getElementById('Calculation-output') ;

    const tr =document.createElement('tr') ;
    tr.innerHTML =`
        <td>${1}</td>
        <td>${'Triangle'}</td>
        <td> ${TriangelTotal}</td>

    `;
    displayfieldOfOutpt.appendChild(tr,btnUse);
})