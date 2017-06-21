/* global apex kscope */
;(function ($, apex, kscope) {
  function setRecordId (da, options) {
    // defaults
    let defaults = {
      pageItems: ''
    }

    // extending defaults with user options
    let settings = $.extend({}, defaults, options)

    if (da.data.selectedRecords.length === 0) {
      return false
    }

    // Get primary key values for the record
    let values = da.data.model._getPrimaryKey(da.data.selectedRecords[0])

    // Create an array of page items from plugin settings
    let pageItems = settings.pageItems.split(',')

    // Loop trough all primary key page items
    pageItems.forEach(function (itemName, key) {
      // Set the value
      apex.item(itemName).setValue(values[key])
    })
  }

  // export this module
  kscope.ig = {
    setRecordId: setRecordId
  }
})(apex.jQuery, apex, kscope)
