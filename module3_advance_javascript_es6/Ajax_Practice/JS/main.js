function load_data() {
  // $("#content").load("ajax.txt");

  let companyVal = $("#CompanyList").val();

  if (companyVal == "1") {
    $("#EmployeeList").load("../Tops.html");
  } else if (companyVal == "2") {
    $("#EmployeeList").load("../Infosys.html");
  } else {
    $("#EmployeeList").load("../HCL.html");
  }
}
