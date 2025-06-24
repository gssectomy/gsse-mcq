
// Local storage handling for user progress
function saveUserProgress(specialty, questionIndex, correct) {
    const key = `gsse_${specialty}_progress`;
    let progress = JSON.parse(localStorage.getItem(key)) || [];
    progress[questionIndex] = correct;
    localStorage.setItem(key, JSON.stringify(progress));
}

function getUserProgress(specialty) {
    const key = `gsse_${specialty}_progress`;
    return JSON.parse(localStorage.getItem(key)) || [];
}

function resetProgress(specialty) {
    const key = `gsse_${specialty}_progress`;
    localStorage.removeItem(key);
}
