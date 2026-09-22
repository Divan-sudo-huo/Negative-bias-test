const questions = [
    "Do you notice criticism more than praise?",
    "Do you expect things to go wrong?",
    "Do you think about mistakes for a long time?",
    "Do you usually expect the worst outcome?",
    "Do negative events stay in your mind?",
    "Do you look for problems even when things are going well?",
    "Do you assume someone is upset when their message is unclear?",
    "Do you worry when someone doesn't reply?",
    "Do you often think people mean something negative?",
    "Do you focus on what went wrong?",
    "Do you take criticism personally?",
    "Do you assume bad intentions without much evidence?",
    "Do you expect important events to go badly?",
    "Do you think about possible failures before starting something?",
    "Do you expect bad things to happen again?",
    "Do you worry more about bad outcomes than good ones?",
    "Do you worry when things are going well?",
    "Do uncertain situations make you expect the worst?",
    "Do embarrassing moments stay in your head?",
    "Do you replay mistakes in your mind?",
    "Do negative memories come back easily?",
    "Do you spend a lot of time thinking about bad experiences?",
    "Do you remember the negative parts of an event more?",
    "Is it hard to stop thinking about something bad?",
    "Do you give yourself credit when something goes well?",
    "Do positive experiences feel as important as negative ones?",
    "Do you accept compliments easily?",
    "Can you recognize when something goes better than expected?",
    "Do you remember positive experiences as clearly as negative ones?",
    "When something goes wrong, can you still notice what went right?"
];

let current = 0;
let score = 0;

function showQuestion() {
    document.getElementById("quiz").innerHTML = `
        <p>Question ${current + 1} of ${questions.length}</p>

        <div class="question">
            ${questions[current]}
        </div>

        <select id="answer">
            <option value="">Choose an answer</option>
            <option value="1">1 - Never</option>
            <option value="2">2 - Rarely</option>
            <option value="3">3 - Sometimes</option>
            <option value="4">4 - Often</option>
            <option value="5">5 - Very often</option>
        </select>
    `;
}

function nextQuestion() {
    const answer = document.getElementById("answer").value;

    if (answer === "") {
        alert("Choose an answer first.");
        return;
    }

    let number = Number(answer);

    // Questions 25-30 are reverse scored
    if (current >= 24) {
        number = 6 - number;
    }

    score += number;
    current++;

    if (current < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const percent = ((score - 30) / 120) * 100;

    document.getElementById("quiz").innerHTML = "";
    document.querySelector("button").style.display = "none";

    document.getElementById("result").innerHTML =
        "Your experimental score: " +
        percent.toFixed(1) +
        "%";
}

showQuestion();
