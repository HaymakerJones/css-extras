"use strict";var __decorate=this&&this.__decorate||function(t,e,o,n){var r,s=arguments.length,i=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;0<=c;c--)(r=t[c])&&(i=(s<3?r(i):3<s?r(e,o,i):r(e,o))||i);return 3<s&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),TransitionsComponent=function(){function t(){this.state=!1}return t.prototype.ngOnInit=function(){},t.prototype.toggle=function(){this.state=!this.state,console.log(this.state)},t=__decorate([core_1.Component({selector:"app-transitions",templateUrl:"./transitions.component.html",styleUrls:["./transitions.component.css"]})],t)}();exports.TransitionsComponent=TransitionsComponent;