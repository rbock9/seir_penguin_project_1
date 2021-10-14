///////////////////////
// APP STATE //
///////////////////////

const state = {
    player1: 0,
    player2: 0,
    which: true
}

let questions = []

///////////////////////
// MAIN DOM ELEMENTS //
///////////////////////

const $question = $("#question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $d = $("#d")
const $p1score = $("#player1 h4")
const $p2score = $("#player2 h4")

///////////////////////
// SOUNDS AND MUSIC  //
///////////////////////

// NOTE: decided not to use most of these since they get annoying very quickly

// const bgMusic = new Audio('./sounds/wario_music.mp3')
// bgMusic.play();
// bgMusic.volume = 0.5;
// bgMusic.loop = true;

const missSound = new Audio('./sounds/wario_missed.wav')
// missSound.play();

const hitSound = new Audio('./sounds/wario_laugh.wav')
// hitSound.play();

const gonnaWinSound = new Audio('./sounds/wario_gonna_win.wav')
// gonnaWinSound.play();

///////////////////////
// FUNCTIONS //
///////////////////////

const chooseAnswer = (event, question) => {
    console.log(event)
    if(event.target.innerText === question.answer) {
        if (state.which) {
            state.player1++
            state.which = !state.which
        } else {
            state.player2++
            state.which = !state.which
        } 
        setBoard(questions)
    } else {
        setBoard(questions)
        state.which = !state.which
    }
}

const setBoard = (q) => {
    // Getting a random question
    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]

    // Update question
    $question.text(randomQuestion.question)
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)
    $d.text(randomQuestion.d)

    // Update players scores
    $p1score.text(state.player1)
    $p2score.text(state.player2)

    $("li").off()
    $("li").on("click", (event) => {
        chooseAnswer(event, randomQuestion)
    })

    if(state.player1 == 5) {
        alert("Player 1 Wins! Pretty easy, huh? Refresh the page to play again, or don't (if you want to keep playing my awesome game). Either way, I'm gettin' outta this dump. Have a rotten day! Ehehehehe!")
        hitSound.play();
    } else if (state.player2 == 5) {
        alert("Player 2 Wins! Pretty easy, huh? Refresh the page to play again, or don't (if you want to keep playing my awesome game). Either way, I'm gettin' outta this dump. Have a rotten day! Ehehehehe!")
        hitSound.play();
    }

}


///////////////////////
// MAIN APP LOGIC //
///////////////////////

const URL = "https://cdn.contentful.com/spaces/wzvjort7ry1s/environments/master/entries?access_token=-eiQG5lPuIZQKafnkI9odfjVMRJ_pvXnhLZ04XvKpC8&content_type=triviaq"

$.ajax(URL)
.then((data) => {
    questions = data.items.map((q) => q.fields)
    // console.log(data)
    // console.log(questions)

    setBoard(questions)
})


alert("WAAAHAHAHA! I'm-a Wario, and welcome to my quiz game! Find a loser - err, I mean, friend - to compete with. The first player to earn 5 points wins the game. Here we go!")

gonnaWinSound.play();

//////////////


// URL for AJAX request:  https://cdn.contentful.com/spaces/wzvjort7ry1s/environments/master/entries?access_token=-eiQG5lPuIZQKafnkI9odfjVMRJ_pvXnhLZ04XvKpC8&content_type=triviaq
