/* global apex kscope */
;(function ($, apex, kscope) {
  // Save state of dialogs in an array
  let dialogs$ = []

  // Function to open a dialog
  function open (da) {
    let regionId = da.action.affectedRegionId
    dialogs$[regionId] = apex.region(regionId).element.dialog('open')
  }

  // Function to close a dialog
  function close (da) {
    dialogs$[da.action.affectedRegionId].dialog('close')
  }

  // Function to set dialog title dynamically
  function setTitle (title) {
    let idItem = 'pPageSubmissionId'
    let topApex = apex.util.getTopApex()
    const id = apex.item(idItem).getValue()

    // Search in top frame in all dialogs to find out which dialog you are yourself
    topApex.jQuery.each(topApex.jQuery('.ui-dialog'), function (key, el) {
      let dialog$ = topApex.jQuery(el)
      let iframe$ = dialog$.find('iframe')
      let dialogId = iframe$.contents().find('#' + idItem).val()
      // If the the correct dialog is found: set new title
      if ((id) && (dialogId) && (id === dialogId)) {
        dialog$.find('.ui-dialog-title').text(title)
        return false
      }
    })
  }

  // Make the functions public
  kscope.dialog = {
    open: open,
    close: close,
    setTitle: setTitle
  }
})(apex.jQuery, apex, kscope)
