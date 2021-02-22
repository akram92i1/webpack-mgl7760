export class ComponentService {
  constructor() {
    this.numberOneInput = document.getElementById("numberOne");
    this.numberTwoInput = document.getElementById("numberTwo");
    this.addValuesButton = document.getElementById("addValues");
    this.MinusValuesButton = document.getElementById("MinusValues");
    this.MultValuesButton = document.getElementById("MultValues");
    this.DivValuesButton = document.getElementById("DivValues");
    this.resultDiv = document.getElementById("result");
  }

  getInputs() {
    return [this.numberOneInput.value, this.numberTwoInput.value];
  }

  setResult(str) {
    this.resultDiv.innerText = str;
  }

  onClick(cb) {
    this.addValuesButton.addEventListener("click", cb);
  }
  onClickMinus(cm) {
    this.MinusValuesButton.addEventListener("click", cm);

  }
  onClickMultiply(cml) {
    this.MultValuesButton.addEventListener("click", cml);
    
  }
  onClickDivide(cd) {
    this.DivValuesButton.addEventListener("click", cd);
  }
}
