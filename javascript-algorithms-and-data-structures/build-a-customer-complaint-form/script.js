const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroup = document.getElementById("solutions-group");
const solutionDescription = document.getElementById("solution-description");

function validateForm() {
  const results = {
    "full-name": fullName.value.trim() !== "",
    "email": /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
    "order-no": /^2024\d{6}$/.test(orderNo.value),
    "product-code": /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(productCode.value),
    "quantity": /^\d+$/.test(quantity.value) && Number(quantity.value) > 0
  }
  const selectedComplaints = complaintsGroup.querySelectorAll('input[type="checkbox"]:checked');
  results["complaints-group"] = selectedComplaints.length > 0;

  const otherComplaintChecked = document.getElementById("other-complaint").checked;
  results["complaint-description"] = otherComplaintChecked ? complaintDescription.value.length >= 20 : true;
  
  const selectedRadio = solutionsGroup.querySelectorAll('input[type="radio"]:checked');
  results["solutions-group"] = selectedRadio.length > 0;
  const otherSolutionChecked = document.getElementById("other-solution").checked;
  results["solution-description"] = otherSolutionChecked ? solutionDescription.value.length >= 20 : true;

  return results;
}

function isValid(objValidateForm) {
  const isTrue = Object.values(objValidateForm).every(item => item === true);
  return isTrue;
}

function applyStyle(element, isValid) {
  const target = (element.id === "complaints-group" || element.id === "solutions-group") ? element : element;
  if (isValid) {
    target.style.borderColor = "green";
    target.style.borderStyle = "solid";
  } else {
    target.style.borderColor = "red";
    target.style.borderStyle = "solid";
  }
}
function updateFieldStyle(element, key) {
  const results = validateForm();
  applyStyle(element, results[key]);
}

fullName.addEventListener("change", () => updateFieldStyle(fullName, "full-name"));
email.addEventListener("change", () => updateFieldStyle(email, "email"));
orderNo.addEventListener("change", () => updateFieldStyle(orderNo, "order-no"));
productCode.addEventListener("change", () => updateFieldStyle(productCode, "product-code"));
quantity.addEventListener("change", () => updateFieldStyle(quantity, "quantity"));
complaintsGroup.addEventListener("change", () => updateFieldStyle(complaintsGroup, "complaints-group"));
complaintDescription.addEventListener("change", () => updateFieldStyle(complaintDescription, "complaint-description"));
solutionsGroup.addEventListener("change", () => updateFieldStyle(solutionsGroup, "solutions-group"));
solutionDescription.addEventListener("change", () => updateFieldStyle(solutionDescription, "solution-description"));

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  const results = validateForm();

  if(!isValid(results)) {
    e.preventDefault();
    
    applyStyle(fullName, results["full-name"]);
    applyStyle(email, results["email"]);
    applyStyle(orderNo, results["order-no"]);
    applyStyle(productCode, results["product-code"]);
    applyStyle(quantity, results["quantity"]);
    applyStyle(complaintsGroup, results["complaints-group"]);
    applyStyle(complaintDescription, results["complaint-description"]);
    applyStyle(solutionsGroup, results["solutions-group"]);
    applyStyle(solutionDescription, results["solution-description"]);
  }
});

