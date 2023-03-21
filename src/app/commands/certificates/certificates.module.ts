import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesComponent } from './certificates.component';

@NgModule({
  declarations: [CertificatesComponent],
  imports: [CommonModule],
  exports: [CertificatesComponent]
})
export class CertificatesModule {}
