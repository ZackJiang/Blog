import { NgModule } from '@angular/core';
import {
  BaPageTop,
} from './components';

const NGA_COMPONENTS = [
 
  BaPageTop,
 
];

@NgModule({
  declarations: [
    ...NGA_COMPONENTS
  ],
  imports: [
   
  ],
  exports: [
   
    ...NGA_COMPONENTS
  ]
})
export class NgaModule {
  
}
