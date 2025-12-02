/* ------------------------------------------------------ */
/* app.ts (TypeScript) */
/* ------------------------------------------------------ */

function mapText(text: string): Array<[string, number]> {
    const mapped: Array<[string, number]> = [];
    const lines = text.split("\n");

    for (const line of lines) {
        const words = line.trim().split(/\s+/);
        for (const word of words) {
            if (word.length > 0) {
                mapped.push([word.toLowerCase(), 1]);
            }
        }
    }
    return mapped;
}

function reduceWordCount(mappedData: Array<[string, number]>): Record<string, number> {
    const wordCounts: Record<string, number> = {};

    for (const [word, count] of mappedData) {
        wordCounts[word] = (wordCounts[word] || 0) + count;
    }

    return wordCounts;
}

function displayOutput(result: Record<string, number>) {
    const outputElement = document.getElementById("output") as HTMLElement;
    const sortedWords = Object.keys(result).sort();

    let text = "";
    for (const word of sortedWords) {
        text += `${word}: ${result[word]}\n`;
    }

    outputElement.textContent = text;
}

// Main logic for HTML UI
document.getElementById("processBtn")?.addEventListener("click", () => {
    const text1 = (document.getElementById("text1") as HTMLTextAreaElement).value;
    const text2 = (document.getElementById("text2") as HTMLTextAreaElement).value;

    const mapped: Array<[string, number]> = [];

    mapped.push(...mapText(text1));
    mapped.push(...mapText(text2));

    const finalCounts = reduceWordCount(mapped);
    displayOutput(finalCounts);
});
