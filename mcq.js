document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            q: "Which tendons lie volar to the distal radius?",
            options: ["Extensor carpi ulnaris", "Flexor pollicis longus", "Flexor digitorum superficialis", "Abductor pollicis longus"],
            answers: [false, true, true, false]
        },
        {
            q: "In carpal tunnel syndrome, which structure is most commonly compressed?",
            options: ["Median nerve", "Ulnar nerve", "Flexor carpi radialis", "Radial artery"],
            answers: [true, false, false, false]
        },
        {
            q: "The floor of the carpal tunnel includes:",
            options: ["Flexor retinaculum", "Lunate and capitate", "Scaphoid and trapezium", "Hamate and pisiform"],
            answers: [false, true, false, false]
        }
    ];

    const quiz = document.getElementById("quiz");

    questions.forEach((q, i) => {
        const div = document.createElement("div");
        div.classList.add("question");
        div.innerHTML = `<p><strong>Q${i + 1}:</strong> ${q.q}</p>`;
        q.options.forEach((opt, j) => {
            const id = `q${i}o${j}`;
            div.innerHTML += `
                <label><input type="checkbox" id="${id}"> ${opt}</label><br>`;
        });
        quiz.appendChild(div);
    });
});
