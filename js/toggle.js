document.querySelector('.toggle').addEventListener('click', function() {
    this.classList.add('animate');
   
    setTimeout(() => {
        this.classList.toggle('active');
        document.querySelector('.wave').classList.toggle('active');
    }, 150);
   
    setTimeout(() => this.classList.remove('animate'), 300);
});