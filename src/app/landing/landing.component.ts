import { Component, HostListener, OnInit } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  isNavbarOpen = false;
  progressWidth = '0%';

  services = [
    { img: '/assets/Books.jpg', title: 'Курсҳои А1 то С1', desc: 'Шумо забони олмониро аз сатҳи ибтидоӣ то сатҳи пешрафта меомӯзед бо усулҳои равшан ва муассир.' },
    { img: '/assets/Test.jpg', title: 'Омодагӣ ба имтиҳонҳои Goethe ва TELC', desc: 'Барномаи махсус барои тайёр кардани донишҷӯён ба имтиҳонҳои байналмилалӣ.' },
    { img: '/assets/class.png', title: 'Синфҳои инфиродӣ', desc: 'Барномаи таълимии фармоишӣ барои ҳар як донишҷӯ бо назардошти сатҳ ва мақсадҳои ӯ.' },
    { img: '/assets/visa.png', title: 'Машварат оид ба таҳсил дар хориҷ', desc: 'Ҳуҷҷатҳо, раванд ва машваратҳои касбӣ барои таҳсил дар Олмон.' }
  ];

  reasons = [
    { img: '/assets/individualProg.jpg', title: 'Барномаи махсус', desc: 'Методикаи таълимӣ, ки танҳо дар Poliglot истифода мешавад ва натиҷа медиҳад.' },
    { img: '/assets/erfolg.jpg', title: 'Муносибати натиҷа-афзал', desc: 'Зиёда аз 80% донишҷӯён пас аз хатм таҳсилро дар Аврупо идома медиҳанд.' },
    { img: '/assets/friendly.jpg', title: 'Муҳити дӯстона', desc: 'Ҳар як дарс дар фазои дӯстона ва дастгирона мегузарад, ки омӯзишро осон ва шавқовар мекунад.' },
    { img: '/assets/lehrer.jpg', title: 'Омӯзгорони воқеӣ', desc: 'Ҳамаи устодони мо таҷрибаи зиндагӣ ва таҳсил дар Олмон доранд ва бо роҳнамоии шахсӣ ба шумо кӯмак мекунанд.' },
    { img: '/assets/real.jpg', title: 'Дарсҳои зинда', desc: 'Шумо бо омӯзгорони воқеӣ дарс мехонед, на танҳо видеоҳоро тамошо мекунед.' },
    { img: '/assets/Test.jpg', title: 'Дастгирии ҳамешагӣ', desc: 'Мо ҳамеша дар паҳлӯи шумо ҳастем, ҳатто пас аз анҷоми дарсҳо.' },
    { img: '/assets/schooll.jpg', title: 'Барномаи инфиродӣ', desc: 'Ҳар як донишҷӯ бо назардошти мақсад ва сатҳ барномаи таълимии шахсӣ мегирад.' },
    { img: '/assets/callig.jpg', title: 'Машварат ва амал', desc: 'Шумо на танҳо грамматика меомӯзед, балки гуфтугӯ, фаҳм ва амалӣ кардани забонро низ меомӯзед.' },
    { img: '/assets/people.jpg', title: 'Машғулиятҳои гурӯҳӣ', desc: 'Омӯзиш дар гурӯҳҳои хурд барои беҳтар кардани малакаҳои амалӣ ва ҳамкории гурӯҳӣ.' },
    { img: '/assets/euro.jpg', title: 'Машварати ройгон', desc: 'Пеш аз оғози курс шумо машварати шахсӣ мегиред, то ба таври дуруст ба омӯзиш шурӯъ кунед.' },
    { img: '/assets/literature.jpg', title: 'Маводи интерактивӣ', desc: 'Мо барои ҳар як дарс маводи таълимӣ ва машқҳои интерактивӣ истифода мекунем, ки омӯзишро ҷолиб мекунад.' },
    { img: '/assets/Test.jpg', title: 'Натиҷаҳои воқеӣ', desc: 'Шогирдон натиҷаҳои аниқ мебинанд ва малакаҳои забониашонро зуд ва муассир такмил медиҳанд.' }
  ];

  testimonials = [
    { text: 'Шумо бо омӯзгорони соҳибтаҷриба ва ҳамсолон дар гурӯҳҳои хурд ҳамкорӣ мекунед ва малакаҳои амалӣ ва эҷодӣ такмил меёбанд.' },
    { text: 'Шумо на танҳо грамматика ва луғат меомӯзед, балки малакаҳои гуфтугӯ, фаҳм ва истифодаи забонро низ такмил медиҳед.' },
    { text: 'Шумо дар муҳити дӯстона ва дастгирона забони олмониро бо эътимод ва шавқ меомӯзед.' },
    { text: 'Шумо ба барномаи инфиродӣ дастрасӣ пайдо мекунед, ки ба сатҳ ва ҳадафҳои шумо мутобиқ шудааст.' },
    { text: 'Шумо дар синфҳои интерактивӣ ва машғулиятҳои амалӣ малакаҳои воқеиро такмил медиҳед.' },
    { text: 'Шумо бо истифода аз методикаи махсуси Poliglot малакаҳои гуфтугӯ ва фаҳмро зуд ва самаранок инкишоф медиҳед.' },
    { text: 'Шумо имкони машварат ва дастгирии шахсӣ аз ҷониби омӯзгоронро дар тамоми давраи омӯзиш доред.' },
    { text: 'Шумо дар курсҳои гурӯҳӣ ва инфиродӣ малакаҳои эҷодӣ ва ҳамкориро ҳамзамон меомӯзед.' },
    { text: 'Шумо натоиҷи воқеиро мебинед ва бо эътимод ба сатҳи нав ва малакаҳои нави забон мерасед.' }
  ];
  toggleNavbar(): void { this.isNavbarOpen = !this.isNavbarOpen; }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.progressWidth = (scrollTop / scrollHeight) * 100 + '%';
  }


  ngOnInit(): void {

  window.addEventListener('load', () => {
    setTimeout(() => {
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
        loadingScreen.style.transition = 'opacity 0.5s ease';
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 500);
      }
    }, 1500);
  });
}
}

