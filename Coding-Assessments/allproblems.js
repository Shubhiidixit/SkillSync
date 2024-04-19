// Flag to check if the code compiled successfully
let isCodeCompiledSuccessfully = false;

// Function to run the code written in the code editor
function runCode() {
    try {
        // Retrieve the code from the editor
        const userCode = document.getElementById('code-editor').value;

        // Attempt to run the code
        eval(userCode);

        // Set the flag to true if the code compiles successfully
        isCodeCompiledSuccessfully = true;

        alert('Code executed successfully.');
    } catch (error) {
        // Reset the flag if there's an error
        isCodeCompiledSuccessfully = false;
        // Catch and display errors if the code fails to run
        alert(`Error: ${error.message}`);
    }
}

function runTestCase(exampleElement) {
    if (!isCodeCompiledSuccessfully) {
        alert('Please execute your code successfully first before running test cases.');
        return false;
    }

    // Simulate running test cases (replace this with your actual test logic)
    // Here, we're just returning true to indicate success.
    return true;
}

// Function to run all test cases
function runAll() {
    if (!isCodeCompiledSuccessfully) {
        alert('Please execute your code successfully first before running all tests.');
        return;
    }

    const allExamples = document.querySelectorAll('.example');
    let allTestsPassed = true;
    for (const example of allExamples) {
        if (!runTestCase(example)) {
            allTestsPassed = false;
            break;
        }
    }

    if (allTestsPassed) {
        alert('Test cases ran successfully.');
    }
}

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', function () {
    const runButton = document.querySelector('button[onclick="runCode()"]');
    const runAllButton = document.querySelector('button[onclick="runAll()"]');
    const runTestButtons = document.querySelectorAll('.example button');

    if (runButton) {
        runButton.addEventListener('click', runCode);
    }

    if (runAllButton) {
        runAllButton.addEventListener('click', runAll);
    }

    // Set up individual test case buttons
    runTestButtons.forEach(button => {
        button.addEventListener('click', function () {
            runTestCase(this.parentElement);
        });
    });
});
