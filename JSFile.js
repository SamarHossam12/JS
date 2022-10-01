function welcomeMSG(){
    return new Promise(function(resolve, reject) {
                resolve();
            });
}

let promise =welcomeMSG();

promise

.then(function (){
    setTimeout(function(){
        document.write('hello world');
        document.write('\n');
    },3000);
})
.finally(function(){
    setTimeout(function(){
    var val = document.getElementById('imagename'),
            src = 'https://cdn3.vectorstock.com/i/1000x1000/50/22/user-id-card-with-female-photo-vector-10155022.jpg';
            img = document.createElement('img');
            img.src = src;
            document.body.appendChild(img);
            document.write('\n');
    },6000);
})

function Thank(){
    return new Promise(function(resolve, reject) {
                resolve();
            });
            
}

let promise2 =Thank();

promise2

.then(function (){
    setTimeout(function(){
        document.write('Thank you');
        document.write('\n');
    },9000);
    
})

.finally(function(){
    setTimeout(function(){
        location.href = 'https://www.facebook.com/samar.hossam.94/';
    },12000)
})
