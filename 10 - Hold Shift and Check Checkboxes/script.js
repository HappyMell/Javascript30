

const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    let inBetween = false;

    if (e.shiftKey && this.checked) {
        checkBoxes.forEach(checkBox => {
            console.log(checkBox)
            if (checkBox === this || checkBox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkBox.checked = true;
            }
        })
    }

    lastChecked = this;
}

checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck));