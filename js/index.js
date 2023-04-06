// function menghitung luas segitiga
function hitungLuasSegitiga(event) {
    event.preventDefault();
    try {
        const alas=parseFloat(document.getElementById('alas-segitiga').value);
        const tinggi=parseFloat(document.getElementById('tinggi-segitiga').value);
        if (isNaN(alas) || isNaN(tinggi)) {
            throw new Error('Invalid Input!'); 
        }
        const hasil= 0.5*alas*tinggi;
        document.getElementById('show-triangle-area-formula').textContent='L = 1/2 x a x t';
        document.getElementById('show-triangle-area-count').textContent='L = 1/2 x '+ alas +' x ' + tinggi;
        document.getElementById('show-triangle-area-result').textContent='L = ' + hasil;
    } catch (error) {
        console.error(error);
        alert('Error: '+error.message);
    }
}
function resetLuasSegitiga(){
    document.getElementById('form-area-triangle').reset();
    document.getElementById('show-triangle-area-formula').textContent='';
        document.getElementById('show-triangle-area-count').textContent='';
        document.getElementById('show-triangle-area-result').textContent='';
}
// function menghitung keliling segitiga
function hitungKelilingSegitiga(event) {
    event.preventDefault();
    try {
        const alas=parseFloat(document.getElementById('alas-keliling-segitiga').value);
        const sisi1=parseFloat(document.getElementById('sisi1-segitiga').value);
        const sisi2=parseFloat(document.getElementById('sisi2-segitiga').value);
        if (isNaN(alas) || isNaN(sisi1) || isNaN(sisi2)) {
            throw new Error('Invalid Input!'); 
        }
        const hasil= alas+sisi1+sisi2;
        document.getElementById('show-triangle-perimeter-formula').textContent='K = S1 + S2 + a';
        document.getElementById('show-triangle-perimeter-count').textContent='K = '+ sisi1 +' + '  + sisi2 +' + ' + alas;
        document.getElementById('show-triangle-perimeter-result').textContent='K = ' + hasil;
    } catch (error) {
        console.error(error);
        alert('Error: '+error.message);
    }
}
function resetKelilingSegitiga(){
    document.getElementById('form-perimeter-triangle').reset();
    document.getElementById('show-triangle-perimeter-formula').textContent='';
        document.getElementById('show-triangle-perimeter-count').textContent='';
        document.getElementById('show-triangle-perimeter-result').textContent='';
}
// function menghitung luas jajargenjang
function hitungLuasJajargenjang(event) {
    event.preventDefault();
    try {
        const alas=parseFloat(document.getElementById('alas-jajargenjang').value);
        const tinggi=parseFloat(document.getElementById('tinggi-jajargenjang').value);
        if (isNaN(alas) || isNaN(tinggi)) {
            throw new Error('Invalid Input!'); 
        }
        const hasil= alas*tinggi;
        document.getElementById('show-parallelogram-area-formula').textContent='L = a x t';
        document.getElementById('show-parallelogram-area-count').textContent='L = '+ alas +' x ' + tinggi;
        document.getElementById('show-parallelogram-area-result').textContent='L = ' + hasil;
    } catch (error) {
        console.error(error);
        alert('Error: '+error.message);
    }
}
function resetLuasJajargenjang(){
    document.getElementById('form-area-parallelogram').reset();
    document.getElementById('show-parallelogram-area-formula').textContent='';
        document.getElementById('show-parallelogram-area-count').textContent='';
        document.getElementById('show-parallelogram-area-result').textContent='';
}
// function menghitung keliling jajargenjang
function hitungKelilingJajargenjang(event) {
    event.preventDefault();
    try {
        const alas=parseFloat(document.getElementById('alas-keliling-jajargenjang').value);
        const tinggi=parseFloat(document.getElementById('sisib-jajargenjang').value);
        if (isNaN(alas) || isNaN(tinggi)) {
            throw new Error('Invalid Input!'); 
        }
        const hasil= 2 * (alas+tinggi);
        document.getElementById('show-parallelogram-perimeter-formula').textContent='K = 2 x (a + t)';
        document.getElementById('show-parallelogram-perimeter-count').textContent='L = 2 x ('+ alas +' x ' + tinggi + ')';
        document.getElementById('show-parallelogram-perimeter-result').textContent='L = ' + hasil;
    } catch (error) {
        console.error(error);
        alert('Error: '+error.message);
    }
}
function resetKelilingJajargenjang(){
    document.getElementById('form-perimeter-parallelogram').reset();
    document.getElementById('show-parallelogram-perimeter-formula').textContent='';
        document.getElementById('show-parallelogram-perimeter-count').textContent='';
        document.getElementById('show-parallelogram-perimeter-result').textContent='';
}