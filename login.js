window.onload = function() {
  document.querySelector('form').onsubmit = function() {
    var name = $("#emailId").val();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(name)) {
       return true
    }
    alert("You have entered an invalid email address!")
    return false
  };
};
