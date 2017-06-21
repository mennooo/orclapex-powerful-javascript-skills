/* global apex */
;(function (apex, $) {
  let ajaxResponse // Will have value of AJAX Request later on

  function startRaiseProcess (raise) {
    return apex.server.process('give_raise', {
      x01: raise
    })
  }

  function checkRaise (raise) {
    
  }

  function setAjaxResponse (data) {
    ajaxResponse = data
  }

  function showSuccessMessage (pData) {
    apex.message.alert(ajaxResponse.result)
  }

  function giveRaise () {
    let raise = window.prompt('How much percent raise do you want to give', '1')
    startRaiseProcess(raise)
      .then(setAjaxResponse)
      .then(apex.region('sal_report').refresh)
      .done(showSuccessMessage)
      .fail(console.error)
  }

  $('document').ready(function () {
    $('#raise_button').on('click', giveRaise)
  })
})(window.apex, apex.jQuery)
