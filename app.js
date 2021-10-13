///////////////////////
// APP STATE //
///////////////////////

const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {},
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

    $("li").off
    $("li").on("click", (event) => {
        chooseAnswer(event, randomQuestion)
    })

}


///////////////////////
// MAIN APP LOGIC //
///////////////////////


const URL = "https://cdn.contentful.com/spaces/wzvjort7ry1s/environments/master/entries?access_token=-eiQG5lPuIZQKafnkI9odfjVMRJ_pvXnhLZ04XvKpC8&content_type=triviaq"

$.ajax(URL)
.then((data) => {
    questions = data.items.map((q) => q.fields)
    console.log(data)
    console.log(questions)

    setBoard(questions)
})


///////////////////////
// SOUNDS AND MUSIC  //
///////////////////////

var bgMusic = new Audio('./sounds/wario_music.mp3')
// bgMusic.play();
// bgMusic.volume = 0.5;
// bgMusic.loop = true;

var missSound = new Audio('./sounds/wario_missed.wav')
// missSound.play();

var hitSound = new Audio('./sounds/wario_laugh.wav')
// hitSound.play();

var gonnaWinSound = new Audio('./sounds/wario_gonna_win.wav')
// gonnaWinSound.play();



/////////////


// Sample URL: https://cdn.contentful.com/spaces/{space_id}/environments/{environment_id}/entries?access_token={access_token}&content_type={content_type}

// URL with space id (wzvjort7ry1s) and access token, but missing content type https://cdn.contentful.com/spaces/wzvjort7ry1s/environments/master/entries?access_token=-eiQG5lPuIZQKafnkI9odfjVMRJ_pvXnhLZ04XvKpC8 

// Final URL with everything needed:  https://cdn.contentful.com/spaces/wzvjort7ry1s/environments/master/entries?access_token=-eiQG5lPuIZQKafnkI9odfjVMRJ_pvXnhLZ04XvKpC8&content_type=triviaq
