const fs = require('fs');

function preprocess(input) {
    const sections = input.split(/\[itap\]/);

    const components = sections.map((section, index) => {
        if (index === 0) return ''; // Skip the first empty section
        
        const [theory, prompt] = section.split('--prompt--');

        // Check if both theory and prompt sections exist
        const theoryContent = theory ? theory.trim() : '';
        const promptContent = prompt ? prompt.trim() : '';

        let TheoryHTML = `<p class="content_blck">${theoryContent}</p>`

        let promptHTML = '';
        if (/\[sc\]/.test(promptContent)) {
            const options = promptContent.split(/\[sc\]/).map(option => option.trim());
            promptHTML = options.map((option, idx) => `<input type="radio" name="sc_opt" id="option-${index}-${idx}" value="${option}"><label for="option-${index}-${idx}">${option}</label><br>`).join('')
            promptHTML = `<div class="prompt_blck" id="prompt-${index}">
                <div>${promptHTML}</div>
                <button type="submit" class="p_submit" onclick="toggleVisibility(${index+1})">Submit</button>
            </div>
            
            `
        } else if (/\[mc\]/.test(promptContent)) {
            const options = promptContent.split(/\[mc\]/).map(option => option.trim());
            promptHTML = options.map((option, idx) => `<input type="checkbox" name="mc_opt" id="option-${index}-${idx}" value="${option}"><label for="option-${index}-${idx}">${option}</label><br>`).join('');
            promptHTML = `<div class="prompt_blck" id="prompt-${index}">
                <div>${promptHTML}</div>
                <button type="submit" class="p_submit" onclick="toggleVisibility(${index+1})">Submit</button>
            </div>
            
            `
        } else {
            promptHTML = `<button class="prompt_blck" id="prompt-${index}" onclick="toggleVisibility(${index+1})">${promptContent}</button>`
        }

        return `
<div id="theory-${index}">
    ${TheoryHTML}
    ${promptHTML}
</div>
        `;
    });

    const jsx = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Book</title>
    <link rel="stylesheet" type="text/css" href="./itap/css/styles.css" />
    <script>
        function toggleVisibility(index) {
            var p_index = index - 1;
            const prompt = document.getElementById('prompt-' + p_index);
            const theory = document.getElementById('theory-' + index);
            if (theory.style.display === 'none') {
                theory.style.display = 'block';
                prompt.style.display = 'none';
            } else {
                theory.style.display = 'none';
            }
        }
    </script>
</head>
<body>
    ${components.join('\n')}
</body>
</html>
    `;

    return jsx;
}

// Read input file, preprocess, and write output file
const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];

const input = fs.readFileSync(inputFilePath, 'utf8');
const output = preprocess(input);
fs.writeFileSync(outputFilePath, output, 'utf8');

console.log('[INFO] (mdbook-itap): Preprocessing completed');
