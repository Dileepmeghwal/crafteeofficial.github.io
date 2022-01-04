$( "#blog" ).hover(  function() {
    $('#item_no').text(function(i, oldText) {
    return oldText === '00' ? '01' : oldText;
});
$('#item_no').css({"color":"#bc382e"});
},function() {
    $('#item_no').text(function(i, oldText) {
    return oldText === '01' ? '00' : oldText;
    
});
$('#item_no').css({"color":"white"});
});
$( "#career" ).hover(  function() {
    $('#item_no').text(function(i, oldText) {
    return oldText === '00' ? '02' : oldText;
});
$('#item_no').css({"color":"#046582"});
},function() {
    $('#item_no').text(function(i, oldText) {
    return oldText === '02' ? '00' : oldText;
    
});
$('#item_no').css({"color":"white"});
});
$( "#about" ).hover(  function() {
    $('#item_no').text(function(i, oldText) {
    return oldText === '00' ? '03' : oldText;
});
$('#item_no').css({"color":"#999B84"});
},function() {
    $('#item_no').text(function(i, oldText) {
    return oldText === '03' ? '00' : oldText;
    
});
$('#item_no').css({"color":"white"});
});
$( "#service" ).hover(  function() {
    $('#item_no').text(function(i, oldText) {
    return oldText === '00' ? '04' : oldText;
});
$('#item_no').css({"color":"#046582"});
},function() {
    $('#item_no').text(function(i, oldText) {
    return oldText === '04' ? '00' : oldText;
    
});
$('#item_no').css({"color":"white"});
});
$( "#contact" ).hover(  function() {
    $('#item_no').text(function(i, oldText) {
    return oldText === '00' ? '05' : oldText;
});
$('#item_no').css({"color":"#041351"});
},function() {
    $('#item_no').text(function(i, oldText) {
    return oldText === '05' ? '00' : oldText;
});
$('#item_no').css({"color":"white"});
});