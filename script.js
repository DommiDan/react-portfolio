const logo = document.querySelectorAll('#logo path');

for(let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
    
}
const logo1 = document.querySelectorAll('#logo1 path');

for(let i = 0; i < logo1.length; i++) {
    console.log(`Letter ${i} is ${logo1[i].getTotalLength()}`);
    
}
const logo3 = document.querySelectorAll('#logo3 path');

for(let i = 0; i < logo3.length; i++) {
    console.log(`Letter ${i} is ${logo3[i].getTotalLength()}`);
    
}