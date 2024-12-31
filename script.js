function validate() {
    const kode = document.getElementById('Kode').value.trim();
    const errorElement = document.getElementById('error-Kode');

    errorElement.innerText = '';

    if (kode === '') {
        errorElement.innerText = 'Masukan Kode !! ';
    } else {
        alert('Kode Berhasil Dimasukkan !!');
        window.location.href = 'DataDiri.html';
    }
}

const questions = [
    { question: "Apa kepanjangan dari HTML?", options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"], answer: 1 },
    { question: "Tag mana yang digunakan untuk paragraf dalam HTML?", options: ["<p>", "<a>", "<div>"], answer: 0 },
    { question: "HTML adalah bahasa _____?", options: ["Programming", "Markup", "Scripting"], answer: 1 },
    { question: "Tag apa yang digunakan untuk membuat tautan dalam HTML?", options: ["<a>", "<link>", "<href>"], answer: 0 },
    { question: "Atribut mana yang menentukan teks alternatif untuk suatu gambar?", options: ["title", "alt", "src"], answer: 1 }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

function startQuiz() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    loadQuestion();
}

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById('question-title').innerText = questionData.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    questionData.options.forEach((option, index) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = index;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsContainer.appendChild(label);
        optionsContainer.appendChild(document.createElement('br'));
    });

    startTimer();
}

function startTimer() {
    let timeLeft = 30;

    // Hapus timer sebelumnya jika ada
    const existingTimer = document.getElementById('timer');
    if (existingTimer) {
        clearInterval(timer); // Hentikan timer sebelumnya
        existingTimer.remove();
    }

    const timerElement = document.createElement('p');
    timerElement.id = 'timer';
    timerElement.innerText = `Time left: ${timeLeft}s`;
    document.getElementById('quiz-screen').appendChild(timerElement);

    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption && parseInt(selectedOption.value) === questions[currentQuestionIndex].answer) {
        score += 20; // Tambahkan 20 poin untuk jawaban yang benar
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timer); // Hentikan timer saat kuis selesai
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');
    
    // Menampilkan skor di elemen dengan ID 'score-display'
    document.getElementById('score-display').innerText = `Skor Anda: ${score} / ${questions.length * 20}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
}