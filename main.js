var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('the God of Mischief')
    .pauseFor(2500)
    .deleteAll()
    .typeString('son of Odin.')
    .pauseFor(2500)
    .deleteAll()
     .typeString('king of Jotunheim.')
     .pauseFor(2500)
    .start();