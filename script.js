
 
const sections = [

    "introduction",
    "regex-summary",
    "anchors",
    "quantifiers",
    "grouping-constructs",
    "bracket-expressions",
    "about-author",
    "character-classes",
    "the-or-operator",
    "flags",
    "character-escapes",
];

let currentSectionIndex = 0;

function showSection(index) {
  
    sections.forEach(section => {
        document.getElementById(section).style.display = "none";
    });

   
    document.getElementById(sections[index]).style.display = "block";
}

function highlightRegex() {
    const regexPattern = /^([A-Za-z]+)@([A-Za-z]+)\.com$/;
    const explanation = [
        "This regex starts with ^, which signifies the start of a line or string.",
        "([A-Za-z]+) captures the username composed of one or more uppercase or lowercase alphabetical characters.",
        "@ matches the @ symbol in the email address.",
        "([A-Za-z]+) captures the domain, also composed of one or more alphabetical characters.",
        "\\. matches the dot (.) symbol between the username and domain.",
        "com matches the literal characters 'com' to specify that the email should end with '.com'.",
        "$ represents the end of a line or string, ensuring that the regex only matches email addresses ending with '.com'."
    ];

    const regexExplanation = document.getElementById("regex-explanation");

    explanation.forEach((step, index) => {
        setTimeout(() => {
            regexExplanation.textContent = step;
            highlightRegexPart(index);
        }, index * 2000);  
    });

    setTimeout(() => {
        regexExplanation.textContent = "";
        highlightRegexPart(-1);  
    }, explanation.length * 2000);
}

function highlightRegexPart(index) {
    const regexPattern = /^([A-Za-z]+)@([A-Za-z]+)\.com$/;
    const inputText = document.getElementById("regex-input").value;

    const matchedText = inputText.match(regexPattern);

    if (matchedText && matchedText.length >= 3) {
        const [_, username, domain] = matchedText; 
        const regexExplanation = document.getElementById("regex-explanation");
        const highlightedText = inputText.replace(username, `<span class="highlight">${username}</span>`);
        regexExplanation.innerHTML = `Explanation: ${highlightedText} is a valid email address.`;
    } else {
        const regexExplanation = document.getElementById("regex-explanation");
        regexExplanation.innerHTML = "";
    }
}

document.getElementById("next-button").addEventListener("click", () => {
    currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
    showSection(currentSectionIndex);
});

document.getElementById("prev-button").addEventListener("click", () => {
    currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
    showSection(currentSectionIndex);
});
 
showSection(currentSectionIndex);