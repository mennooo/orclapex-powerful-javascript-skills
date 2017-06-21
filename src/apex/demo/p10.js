/* global apex */
apex.jQuery('document').ready(function () {
  apex.jQuery('#raise_button').on('click', function () {
    var raise = window.prompt('How much percent raise do you want to give', '1')
    if (raise) {
      apex.server.process('give_raise', {
        x01: raise
      }, {
        dataType: 'json',
        success: function (pData) {
          apex.region('sal_report').refresh()
          apex.message.alert(pData.result)
        },
        error: function (pData) {
          apex.debug.error(pData)
        }
      })
    }
  })
})

