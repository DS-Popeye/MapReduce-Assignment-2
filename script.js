// MapReduce-style word count
function mapReduce(text) {
    const words = text.toLowerCase().match(/\b[a-z0-9]+\b/g) || [];
    const counts = {};

    words.forEach(word => {
        counts[word] = (counts[word] || 0) + 1;
    });

    let result = "Word Count Result:\n\n";
    for (let w in counts) {
        result += `${w}: ${counts[w]}\n`;
    }

    return result;
}

document.getElementById("processBtn").addEventListener("click", () => {
    const text1 = document.getElementById("text1").value;
    const text2 = document.getElementById("text2").value;

    // combine both inputs
    const combinedText = text1 + " " + text2;

    const result = mapReduce(combinedText);

    document.getElementById("output").textContent = result;
});