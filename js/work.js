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
        <td>${'=>'}</td>
        <td>${firstCal}</td>
        <td> ${secondCal}</td>
        
        

    `;
    displayfieldOfOutpt.appendChild(tr);
}

document.getElementById('blog-btn').addEventListener('click', function(){
    
    window.location.href = './qustionAnswer.html'
})

document.getElementById('Triangle-calculate-btn').addEventListener('click', function(){
    const triangle=calculateTwoValue('Triangle-bed-field','Triangle-hight-field');
    const total=triangle*.5;   
    const TriangelTotal=total.toFixed(2)
    

    calculation('Triangel',TriangelTotal);
    
})

document.getElementById('Rectangle-calculate-btn').addEventListener('click', function(){
    const Rectangle=calculateTwoValue('Rectangle-width-field','Rectangle-hight-field');  
    const RectangleTotal=Rectangle.toFixed(2);

    calculation('Rectangle',RectangleTotal);
    
})

document.getElementById('Parallelogram-calculate-btn').addEventListener('click', function(){
    const Parallelogram=calculateTwoValue('Parallelogram-bed-field','Parallelogram-hight-field')   
    const ParallelogramTotal=Parallelogram.toFixed(2);

    calculation('Parallelogram',ParallelogramTotal);
    
})
document.getElementById('Rhombus-calculate-btn').addEventListener('click', function(){
    const Rhombus=calculateTwoValue('Rhombus-bed-field','Rhombus-hight-field');
    const total=Rhombus*.5;   
    const RhombusTotal=total.toFixed(2)
    

    calculation('Rhombus',RhombusTotal);
    
})
document.getElementById('Pentagon-calculate-btn').addEventListener('click', function(){
    const Pentagon=calculateTwoValue('Pentagon-bed-field','Pentagon-hight-field');
    const total=Pentagon*.5;   
    const PentagonTotal=total.toFixed(2)
    

    calculation('Pentagon',PentagonTotal);
    
})

document.getElementById('Ellipse-calculate-btn').addEventListener('click', function(){
    const Ellipse=calculateTwoValue('Ellipse-bed-field','Ellipse-hight-field');
    const total=Ellipse*3.1416;   
    const EllipseTotal=total.toFixed(2)
    

    calculation('Ellipse',EllipseTotal);
    
})

