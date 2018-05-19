"use strict";var __decorate=this&&this.__decorate||function(o,e,n,r){var t,c=arguments.length,p=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(o,e,n,r);else for(var u=o.length-1;0<=u;u--)(t=o[u])&&(p=(c<3?t(p):3<c?t(e,n,p):t(e,n))||p);return 3<c&&p&&Object.defineProperty(e,n,p),p};Object.defineProperty(exports,"__esModule",{value:!0});var platform_browser_1=require("@angular/platform-browser"),core_1=require("@angular/core"),app_component_1=require("./app.component"),translucent_borders_component_1=require("./translucent-borders/translucent-borders.component"),multi_border_component_1=require("./multi-border/multi-border.component"),flex_background_position_component_1=require("./flex-background-position/flex-background-position.component"),striped_background_component_1=require("./striped-background/striped-background.component"),complex_background_component_1=require("./complex-background/complex-background.component"),random_backgrounds_component_1=require("./random-backgrounds/random-backgrounds.component"),continuous_image_borders_component_1=require("./continuous-image-borders/continuous-image-borders.component"),AppModule=function(){function o(){}return o=__decorate([core_1.NgModule({declarations:[app_component_1.AppComponent,translucent_borders_component_1.TranslucentBordersComponent,multi_border_component_1.MultiBorderComponent,flex_background_position_component_1.FlexBackgroundPositionComponent,striped_background_component_1.StripedBackgroundComponent,complex_background_component_1.ComplexBackgroundComponent,random_backgrounds_component_1.RandomBackgroundsComponent,continuous_image_borders_component_1.ContinuousImageBordersComponent],imports:[platform_browser_1.BrowserModule],providers:[],bootstrap:[app_component_1.AppComponent]})],o)}();exports.AppModule=AppModule;