import { VariableLengthQuantity } from "./VariableLengthQuantity";
import { FileByteInputStream } from "./FileByteInputStream";
import $ from 'jquery';

let file = ($("#files")[0] as HTMLInputElement).files?.[0];;
console.log(file);
// $("#files").on('change','#files' , function(){
//     let fileByteInputStream = new FileByteInputStream();
// });