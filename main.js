// const errorMsg = document.querySelector("error");
// const numberInput = document.getElementById("number");
// const convertButton = document.getElementById("convert-button");
// const resultMsg = document.getElementById("output");

function intToRoman(num) {
    const symbolsList = [
        ["I", 1],
        ["IV", 4],
        ["V", 5],
        ["IX", 9],
        ["X", 10],
        ["XL", 40],
        ["L", 50],
        ["XC", 90],
        ["C", 100],
        ["CD", 400],
        ["D", 500],
        ["CM", 900],
        ["M", 1000],
        ['V\u0305', 5000],
        ['X\u0305', 10000],
        ['L\u0305', 50000],
        ['C\u0305', 100000],
        ['D\u0305', 500000],
        ['M\u0305', 1000000],
    ];

    let i = symbolsList.length - 1;
    let roman = "";
    while (num > 0) {
        const currentDivider = symbolsList[i][1];
        const currentSymbol = symbolsList[i][0];

        const result = Math.floor(num / currentDivider);
        if (result > 0) {
            let temp = "";
            for (let j = 0; j < result; j++) {
                temp += currentSymbol;
            }
            roman += temp;
            num %= currentDivider;
        }
        i -= 1;
    }
    return roman;
}

// function resetInterpretation() {
//     resultMsg.textContent = "the answer will be displayed here"

// }

// function conversion() {
//     const inputNumber = number.value;
//     if (inputNumber === "") {
//         errorMsg.textContent = "please input a value";
//         resetInterpretation();
//         return
//     }
//     if (inputNumber <= 0 || inputNumber >= 4000000) {
//         errorMsg.textContent = "the number inputs should be between 1 and 4000000";
//         resetInterpretation();
//         return
//     }
//     else {
//         errorMsg.textContent = "";
//         const roman = intToRoman(inputNumber);
//         resultMsg.innerHTML = `${inputNumber} : ${roman}`;
//     }
// }

// convertButton.addEventListener("click", function () {
//     console.log("hooray")
//     conversion()
// })

// console.log("tupac shakurr")

const InputNumber = document.getElementById("number");
const convertButton = document.getElementById("convert-button");
const errorbox = document.querySelector(".error");
const output = document.getElementById("output");

const noOutput = () => {
    output.textContent = "";
}

const mainEngine = () => {
    const inputValue = InputNumber.value;

    if (inputValue == "") {
        errorbox.textContent = "Please enter a value";
        noOutput();
        return;
    }

    if (inputValue >= 4000000) {
        errorbox.textContent = "Enter a value less than 4000000";
        noOutput();
        return;
    }

    if (inputValue <= 0) {
        errorbox.textContent = "Enter a value greater than 0";
        noOutput();
        return;
    }

    const romanValue = intToRoman(inputValue);
    output.textContent = `${inputValue}` = `${romanValue}`;
}

convertButton.addEventListener('click', (event) => {
    mainEngine();
});

document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        mainEngine();
    }
});