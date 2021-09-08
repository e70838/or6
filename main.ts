//document.getElementById("index")!.innerHTML = "Changed by TypeScript!";

declare function validateForm() : boolean;

function validateForm() {
    console.log("bozo");
    const n1: number = parseInt(
      (<HTMLInputElement>document.getElementById("num1")).value,
      10
    );
    const n2: number = parseInt(
      (<HTMLInputElement>document.getElementById("num2")).value,
      10
    );
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      alert("Not a number");
      return false;
    }
    document.getElementById("app").innerHTML = `produit = ${n1 * n2}`;
    return false;
  }