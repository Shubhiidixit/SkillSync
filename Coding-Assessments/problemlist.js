const problemsListElement = document.getElementById('problemList');

// Define your problems
const problems = [
    { id: 1, title: "Two Sum", difficulty: "Easy", fileName: "problem1.html" },
    { id: 2, title: "Reverse Linked List", difficulty: "Medium", fileName: "problem2.html" },
    { id: 3, title: "Valid Parentheses", difficulty: "Medium", fileName: "problem3.html" },
    { id: 4, title: "Power of Two", difficulty: "Easy", fileName: "problem4.html" }
];

problems.forEach(problem => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="${problem.fileName}">${problem.id}. ${problem.title}</a> <span class="difficulty ${problem.difficulty.toLowerCase()}">${problem.difficulty}</span>`;
    problemsListElement.appendChild(listItem);
});
