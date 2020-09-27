import { VariableLengthQuantity } from "./VariableLengthQuantity";
import { FileByteInputStream } from "./FileByteInputStream";
import $ from 'jquery';

$(function() {
    $("#files").on('change',  function(){
        let file = ($("#files")[0] as HTMLInputElement).files?.[0];
        console.log(file);
        $('#result').css("background-color", "red");
    });
});
