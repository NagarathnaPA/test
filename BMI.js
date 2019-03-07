var UIlayer = {
    headingH1: document.querySelector("#heading"),

    weightLabel: document.querySelector("#weightLabel"),
    weightTxtBox: document.querySelector("#weightTextBox"),

    heightLabel: document.querySelector("#heightLabel"),
    heightTxtBox: document.querySelector("#heightTextBox"),

    wristLabel: document.querySelector("#wristLabel"),
    wristTxtBox: document.querySelector("#wristTextBox"),

    waistLabel: document.querySelector("#waistLabel"),
    waistTxtBox: document.querySelector("#waistTextBox"),

    hipLabel: document.querySelector("#hipLabel"),
    hipTxtBox: document.querySelector("#hipTextBox"),

    forearmLabel: document.querySelector("#forearmLabel"),
    forearmTxtBox: document.querySelector("#forearmTextBox"),

    genderLabel: document.querySelector("#genderLabel"),
    maleRadio: document.querySelector("#male"),
    femaleRadio: document.querySelector("#female"),

    the_table: document.querySelector("#output_table"),
    result: document.querySelector("#result"),

    calculateBtn: document.querySelector("#calculate"),
    saveBtn: document.querySelector("#save"),

    heading: "BMI CALCULATOR",
    weightTxt: "Enter the Weight",
    heightTxt: "Enter the Height",
    wristTxt: "Enter the Wrist size",
    waistTxt: "Enter the Waist size",
    hipTxt: "Enter the hip size",
    forearmTxt: "Enter the forearm size",
    genderTxt: "Choose the gender",
    alertProperInput: "Please provide all the data",
    alertNumber: "Enter only numbers",
    alertSave: "Please get the result and then click save"
}

var elements = {
    calculateButton: {
        id: UIlayer.calculateBtn,
        theEvent: "click",
        eventFunction: calculateBmiAndFat
    },
    saveButton: {
        id: UIlayer.saveBtn,
        theEvent: "click",
        eventFunction: save
    },
}
function addEvents() {
    for (element in elements) {

        elements[element].id.addEventListener(elements[element].theEvent, elements[element].eventFunction);
    }
}

//logic Layer
function setUI() {
    UIlayer.headingH1.innerHTML = UIlayer.heading;
    UIlayer.weightLabel.innerHTML = UIlayer.weightTxt;
    UIlayer.heightLabel.innerHTML = UIlayer.heightTxt;
    UIlayer.wristLabel.innerHTML = UIlayer.wristTxt;
    UIlayer.waistLabel.innerHTML = UIlayer.waistTxt;
    UIlayer.hipLabel.innerHTML = UIlayer.hipTxt;
    UIlayer.forearmLabel.innerHTML = UIlayer.forearmTxt;
    UIlayer.genderLabel.innerHTML = UIlayer.genderTxt;
}

function calculateBmiAndFat() {
    weight = UIlayer.weightTxtBox.value;
    var height = UIlayer.heightTxtBox.value;
    var wrist = UIlayer.wristTxtBox.value;
    var waist = UIlayer.waistTxtBox.value;
    var hip = UIlayer.hipTxtBox.value;
    var forearm = UIlayer.forearmTxtBox.value;
    if (weight && height && wrist && waist && hip && forearm) {
        var alphaExp = /[0-9]/;
        var isValueAlpha = weight.match(alphaExp);
        var isValueAlpha1 = height.match(alphaExp);
        var isValueAlpha2 = wrist.match(alphaExp);
        var isValueAlpha3 = waist.match(alphaExp);
        var isValueAlpha4 = hip.match(alphaExp);
        var isValueAlpha5 = forearm.match(alphaExp);

        if (isValueAlpha && isValueAlpha1 && isValueAlpha2 && isValueAlpha3 && isValueAlpha4 && isValueAlpha5) {
            //BMI calculation
            var heightsqr = height ** 2;
            var bmi = Math.round(weight / heightsqr);

            if (bmi < 16){
                UIlayer.result.innerHTML = "BMI:" + bmi + "<br>Class:Severe Thiness";
                UIlayer.result.style.color="red";}
            else if (bmi > 16 && bmi <= 17){
                UIlayer.result.innerHTML = "BMI:" + bmi + "<br>Class:Moderate Thiness";
                UIlayer.result.style.color="orange";}
            else if (bmi > 17 && bmi <= 18.5){
                UIlayer.result.innerHTML = "BMI:" + bmi + "<br>Class:Mild Thiness";
                UIlayer.result.style.color="yellow";}
            else if (bmi > 18.5 && bmi <= 25){
                UIlayer.result.innerHTML = "BMI:" + bmi + "<br>Class:Normal";
                UIlayer.result.style.color="green"}
            else if (bmi > 25 && bmi <= 30){
                UIlayer.result.innerHTML = "BMI:" + bmi + "<br>Class:Over weight";
                UIlayer.result.style.color="orange"}
            else if (bmi > 30 && bmi <= 35){
                UIlayer.result.innerHTML = "BMI:" + bmi + "<br>Class:Obese class I";
                UIlayer.result.style.color="red"}
            else if (bmi > 35 && bmi <= 40){
                UIlayer.result.innerHTML = "BMI:" + bmi + "<br>Class:Obese class II";
                UIlayer.result.style.color="red"}
            else{
                UIlayer.result.innerHTML = "BMI:" + bmi + "<br>Class:Obese class III";
                UIlayer.result.style.color="red"}

            //FAT calculation
            var bool = UIlayer.femaleRadio.checked;
            if (bool) {
                // For female
                var weightIb = weight / 0.45359237;

                var factor1 = (weightIb * 0.732) + 8.987;
                var factor2 = wrist / 3.140;
                var factor3 = waist * 0.157;
                var factor4 = hip * 0.249;
                var factor5 = forearm * 0.434;

                var lean_body_mass = factor1 + factor2 - factor3 - factor4 + factor5;

                var body_fat_weight = weightIb - lean_body_mass;

                var body_fat_pecentage = Math.round((body_fat_weight * 100) / weightIb);
                UIlayer.result.innerHTML += "<br>Percentage:" + body_fat_pecentage + "%";
            } else {
                //For male
                var weightIb = weight / 0.45359237;
                var factor1 = (weightIb * 1.082) + 94.42;

                var factor2 = waist * 4.15;

                var lean_body_mass = factor1 - factor2;

                var body_fat_weight = weightIb - lean_body_mass;

                var body_fat_pecentage = Math.round((body_fat_weight * 100) / weightIb);
                UIlayer.result.innerHTML += "<br> FAT Percentage:" + body_fat_pecentage + "%";
            }
        } else {
            alert(UIlayer.alertNumber);
        }
    } else {
        alert(UIlayer.alertProperInput);
    }
    UIlayer.weightTxtBox.value = "";
    UIlayer.heightTxtBox.value = "";
    UIlayer.wristTxtBox.value = "";
    UIlayer.waistTxtBox.value = "";
    UIlayer.hipTxtBox.value = "";
    UIlayer.forearmTxtBox.value = "";
  
}
function save() {
    if (UIlayer.result.innerHTML) {
        var str = UIlayer.result.innerHTML;
        var bmi = str.substring(4, str.indexOf("<"));
        var fat = str.substring(str.indexOf("g") + 3, str.length + 1);

        var bmiArr = storage.get(weight, bmi, fat);

        var bmiObj = JSON.stringify({
            Weight: weight,
            BMI: bmi,
            FAT: fat
        });
        bmiArr.push(bmiObj);
        storage.set(bmiArr);
        UIlayer.result.innerHTML = "";
        displayTable();
    } else {
        alert(UIlayer.alertSave);
    }
}
function displayTable() {
    var table = UIlayer.the_table;
    var rowCount = table.rows.length;
    for (var x = rowCount - 1; x > 0; x--) {
        table.deleteRow(x);
    }
    var bmiArr = storage.get();

    if (bmiArr.length) {
        for (var i in bmiArr) {
            var bmiObj = JSON.parse(bmiArr[i]);
            var the_weight = bmiObj.Weight;
            var the_bmi = bmiObj.BMI;
            var the_fat = bmiObj.FAT;
            var row = table.insertRow(-1);
            var cell_weight = row.insertCell(0);
            var cell_bmi = row.insertCell(1);
            var cell_fat = row.insertCell(2);

            cell_weight.innerHTML = the_weight;
            cell_bmi.innerHTML = the_bmi;
            cell_fat.innerHTML = the_fat;
        }
    }
}
function alertInvalidKey(txtBox) {

    if (isNaN(event.key) && (event.key != ".")) {
        alert(UIlayer.alertNumber);
        return false;
    } else {
        switch (txtBox) {
            case UIlayer.weightTxtBox:
                var val = txtBox.value + event.key;
                if (val > 150) {
                    alert(val + " is an Unsual weight!!! please enter the proper weight");
                    txtBox.value = "";
                    return false;
                } else if (val <= 0) {
                    alert("Weight should be greater than zero");
                    txtBox.value = "";
                    return false;
                }
                else
                    return true;
            case UIlayer.heightTxtBox:
                var val = txtBox.value + event.key;
                if (val > 2) {
                    alert(val + " is an Unsual height!!! please enter the proper height");
                    txtBox.value = "";
                    return false;
                } else if (val <= 0) {
                    alert("Height should be greater than zero");
                    txtBox.value = "";
                    return false;
                }
                else
                    return true;
            case UIlayer.wristTxtBox:
                var val = txtBox.value + event.key;
                if (val > 15) {
                    alert(val + " is an Unsual length!!! please enter the proper length");
                    txtBox.value = "";
                    return false;
                } else if (val <= 0) {
                    alert("length should be greater than zero");
                    txtBox.value = "";
                    return false;
                }
                else
                    return true;
            case UIlayer.waistTxtBox:
                var val = txtBox.value + event.key;
                if (val > 35) {
                    alert(val + " is an Unsual length!!! please enter the proper length");
                    txtBox.value = "";
                    return false;
                } else if (val <= 0) {
                    alert("length should be greater than zero");
                    txtBox.value = "";
                    return false;
                }
                else
                    return true;

            case UIlayer.hipTxtBox:
                var val = txtBox.value + event.key;
                if (val > 50) {
                    alert(val + " is an Unsual length!!! please enter the proper length");
                    txtBox.value = "";
                    return false;
                } else if (val <= 0) {
                    alert("length should be greater than zero");
                    txtBox.value = "";
                    return false;
                }
                else
                    return true;
            case UIlayer.forearmTxtBox:
                var val = txtBox.value + event.key;
                if (val > 25) {
                    alert(val + " is an Unsual length!!! please enter the proper length");
                    txtBox.value = "";
                    return false;
                } else if (val <= 0) {
                    alert("length should be greater than zero");
                    txtBox.value = "";
                    return false;
                }
                else
                    return true;
        }
    }

}
setUI();
addEvents();
setTimeout(displayTable, 0);

//storage layer
var storage = {
    get: function () {
        var bmiArray = localStorage.getItem("BMI");
        bmiArray = JSON.parse(bmiArray);
        return (!bmiArray) ? [] : bmiArray;
    },
    set: function (bmiArray) {
        localStorage.setItem("BMI", JSON.stringify(bmiArray));
    },

}