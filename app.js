class Element {
    constructor(tag) {
        this.tag = tag;
    }
    get txt() {
        return this.SetTxt();
    }
    SetTxt() {
        try {
            let thisTxt = document.querySelectorAll(this.tag);
            let arr = [];
            thisTxt.forEach(element => {
                arr.push(element.textContent);
            })
            return arr;
        } catch (error) {
            console.log(error);
        }
    }
    get val() {
        return this.SetVal();
    }
    SetVal() {
        try {
            let thisVal = document.querySelectorAll(this.tag);
            let arr = [];
            thisVal.forEach(element => {
                arr.push(element.value);
            })
            return arr;
        } catch (error) {
            console.log(error);
        }
    }
}

document.getElementById('click').onclick = recupvalue;

function recupvalue() {
    var test = new Element('.myText');
    console.log(test.val)
}