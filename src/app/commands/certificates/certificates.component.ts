import { ChangeDetectionStrategy, Component } from '@angular/core';
import { certificates } from 'src/app/shared/data/utils.data';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificatesComponent {
  certificates = certificates;
}
