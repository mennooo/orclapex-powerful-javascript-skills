/* global apex kscope */
;(function ($, apex, kscope) {
  function addReferenceObject (da, options) {
    // referenceObject defaults
    var defaults = {
      lineWidth: 3,
      color: 'red',
      location: 'front',
      value: 10
    }
    // extending defaults with user options
    var settings = $.extend({}, defaults, options)

    // Oracle JET uses RequireJS and all modules must be loaded
    require(['ojs/ojcore', 'jquery', 'ojs/ojchart', 'ojs/ojgauge', 'ojs/ojvalidation'], function () {
      // Add the reference object to the selected JET Chart
      apex.region(da.action.affectedRegionId).widget().ojChart('option', 'yAxis.referenceObjects', [settings])
    })
  }

  // Export this module
  kscope.jet = {
    addReferenceObject: addReferenceObject
  }
})(apex.jQuery, apex, kscope)
