import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'khulood';
  items = [
    {
      label: '',
      icon: 'pi pi-align-justify',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash',
        },
        {
          separator: true,
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link',
        },
      ],
    },
  ];
  menuItems = [
    {
      items: [
        {
          label: 'تصدير',
          icon: 'pi pi-file-export',
          // command: () => {
          //   captureElementAsPDF('نسبة الوقود المفرغة', 'emptyFuelPercentChart');
          // },
          visible: localStorage
            ?.getItem('permissions')
            ?.includes('SupplyChain.Setting.ExportData'),
        },
        {
          label: 'فتح في نافذه جديده',
          icon: 'pi pi-external-link',
          // command: () => {
          //   this.maximize = true;
          // },
          // url: `home-dashboard/chart-detail/${charts.emptyFuel}`,
        },
      ],
    },
  ];
}
