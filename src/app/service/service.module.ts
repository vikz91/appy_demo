import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HelloService } from './hello/hello.service';
@NgModule({
  imports: [CommonModule],
  providers: [HelloService],
  declarations: []
})
export class ServiceModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ServiceModule
  ) {
    console.error('Already Loaded : ServiceModule');
  }
}
