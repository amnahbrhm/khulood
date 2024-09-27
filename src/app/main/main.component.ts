import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  dialog2: boolean = false;
  constructor(private router: Router) {}
  images: any[] = [
    {
      img: 'image7.png',
      color: '#ECE09E',
      indexColor: '#F1DA07',
      title: 'السيرة الذاتية',
      // subtitle: 'توثيق التفاعل بين المدرسة والمعلمة',
      subtitle: [],
      number: '00',
      count: 120,
    },
    {
      img: 'image1.png',
      color: '#E8C8D0',
      indexColor: '#903D51',
      title: 'الاستراتيجي ',
      // subtitle: 'اهداف برنامج صعوبات التعلم',
      subtitle: ['الاتجاه', ' الاستراتيجي', ' للـــــمدرســــــــة'],
      number: '09',
      count: 120,
    },
    {
      img: 'image1.png',
      color: '#E8C8D0',
      indexColor: '#903D51',
      title: 'الأهداف ',
      // subtitle: 'اهداف برنامج صعوبات التعلم',
      subtitle: ['أهداف', ' برنــــــــامــــج', 'صعوبات التعلم'],
      number: '01',
      count: 120,
    },
    {
      img: 'image5.png',
      color: '#E2C3E1',
      indexColor: '#956293',
      title: 'التحضير',
      // subtitle: 'توثيق التفاعل بين المدرسة والمعلمة',
      subtitle: ['نموذج ', 'التحضير', 'اليــــومـــــي'],
      number: '05',
      count: 120,
    },
    {
      img: 'image6.png',
      color: '#D5D696',
      indexColor: '#818255',
      title: 'أوراق العمل ',
      // subtitle: 'نماذج من أوراق العمل',
      subtitle: ['نماذج ', 'من أوراق ', 'العـــــــــــمــل'],
      number: '06',
      count: 120,
    },
    {
      img: 'image7.png',
      color: '#ECE09E',
      indexColor: '#F1DA07',
      title: 'الوسائل',
      subtitle: ['الوسائل', ' التـــعلـــيمـــية'],
      number: '10',
      count: 120,
    },
    {
      img: 'image3.png',
      color: '#C7C3E2',
      indexColor: '#685EA4',
      title: 'الدورات',
      subtitle: [],
      number: '03',
      count: 120,
    },
    {
      img: 'image4.png',
      color: '#9FD0EC',
      indexColor: '#60A5CB',
      title: 'المبادرات',
      // subtitle: 'المبادرات والانشطة',
      subtitle: ['المبادرات ', 'والانشطة'],
      number: '04',
      count: 120,
    },
    {
      img: 'image7.png',
      color: '#ECE09E',
      indexColor: '#F1DA07',
      title: 'الملاحظات',
      // subtitle: 'ملاحظات مديرة المدرسة',
      subtitle: ['ملاحظات', ' مديرة المدرسة'],
      number: '07',
      count: 120,
    },
    {
      img: 'image5.png',
      color: '#E2C3E1',
      indexColor: '#956293',
      title: 'التفاعل',
      // subtitle: 'توثيق التفاعل بين المدرسة والمعلمة',
      subtitle: ['توثيق ', 'التفاعل', ' بين المدرسة ', 'والــــــــمــعـلـمـة'],
      number: '08',
      count: 120,
    },
    {
      img: 'image2.png',
      color: '#D1E2C3',
      indexColor: '#729954',
      title: 'نماذج الشهادات',
      // subtitle: `نماذج شهادات الطـالـبــات`,
      subtitle: ['نماذج', ' شهادات ', 'الطـالـبــات'],
      number: '02',
      count: 120,
    },
    {
      img: 'image3.png',
      color: '#C7C3E2',
      indexColor: '#685EA4',
      title: 'الزيارات',
      subtitle: ['الزيارات', 'التبادلية'],
      number: '11',
      count: 120,
    },
    {
      img: 'image5.png',
      color: '#E2C3E1',
      indexColor: '#956293',
      title: 'الشراكة المجتمعية',
      // subtitle: 'توثيق التفاعل بين المدرسة والمعلمة',
      subtitle: ['الشراكة', 'المجتمعية'],
      number: '12',
      count: 120,
    },
  ];
  dialog1 = false;
  openContent(numberOfImage: string) {
    if (numberOfImage === '00') this.downloadCv();
    if (numberOfImage === '01') this.dialog1 = true;
    if (numberOfImage === '02') this.router.navigate(['student-certification']);
    if (numberOfImage === '03') this.router.navigate(['certifications']);
    if (numberOfImage === '04') this.router.navigate(['activities']);
    if (numberOfImage === '05') this.router.navigate(['attendance']);
    if (numberOfImage === '06') this.router.navigate(['paparwork']);
    if (numberOfImage === '07') this.router.navigate(['notes']);
    if (numberOfImage === '08') this.router.navigate(['schoolxteacher']);
    if (numberOfImage === '09') this.dialog2 = true;
    if (numberOfImage === '10') this.router.navigate(['lessons']);
    if (numberOfImage === '11') this.router.navigate(['visits']);
    if (numberOfImage === '12') this.router.navigate(['community-partnership']);
  }
  downloadCv() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/content/resume.pdf';
    // link.download = 'khulood-cv.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
