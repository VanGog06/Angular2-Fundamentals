import {Component} from '@angular/core';
import { Data } from './Data';

let articleData = [
  {
    title: 'Angular 2',
    description: 'AngularJS е разработен, като се следва идеята, че декларативното програмиране трябва да се използва за разработката на потребителски софтуер и свързвайки софтуерните компоненти, докато императивното програмиране е по-добре да се използва при дефинирането на бизнес логиката.[2] в приложението. Платформата адаптира и увеличава възможностите на традиционния HTML да представя динамично съдържание чрез двупосочно събиране на данни (data-binding), която позволява автоматичната синхронизация на модел и изглед (MV). В резултат, AngularJS не набляга толкова на DOM манипулацията, а цели подобряването на възможността за тестване на приложението и неговата производителност..[3]',
    author: 'Brat Tech LLC, Google and community',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/AngularJS_logo.svg'
  },
  {
    title: 'ReactJS',
    description: `In computing, React (sometimes styled React.js or ReactJS) is an open-source JavaScript library[2] for building user interfaces.
It is maintained by Facebook, Instagram and a community of individual developers and corporations.[3][4][5] As of July 2017, according to JavaScript analytics service Libscore, websites such as Airbnb, Buffer, Bleacher Report, Feedly, HelloSign, Imgur, Netflix, SeatGeek and others use React.[6]
React allows developers to create large web-applications that use data that can change over time, without reloading the page. It aims primarily to provide speed, simplicity and scalability. React processes only user interfaces in applications. This corresponds to View in the Model-View-Controller (MVC) template, and can be used in combination with other JavaScript libraries or frameworks in MVC, such as AngularJS.[7]`,
    author: 'Facebook, Instagram and community',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/React-icon.svg'
  },
  {
    title: 'NodeJS',
    description: `Node.js е мулти-платформена среда за изпълнение на сървърни и мрежови приложения с отворен код. Приложенията се пишат на JavaScript и могат да се изпълняват в Node.js среда под OS X, Microsoft Windows, Linux и IBM.
Node.js предоставя задвижвана от събития архитектура и неблокираща входно-изходна система за програмиране на приложенията (API), която оптимизира производителността и мащaбируемостта на дадена програма. Тези технологии са често използвани за мрежови приложения, работещи в реално време.
Node.js използва JavaScript двигателя V8 на Google, за да изпълнява код и голяма част от основните модули са написани на JavaScript. Node.js съдържа вградени библиотеки, които позволяват приложенията да работят като сървъри, без софтуер като Apache HTTP Server или IIS.
Node.js придобива популярност като сървърна платформа и се използва от Microsoft,[3][4] Yahoo!,[5] Walmart,[6] Groupon,[7] SAP,[8] LinkedIn,[9][10] Rakuten, PayPal,[11][12] Voxer,[13] и GoDaddy.[14]`,
    author: 'Node.js Developers, Joyent, Github Contributors',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
  },
  {
    title: 'JavaScript',
    description: `JavaScript (чете се джаваскрипт) е интерпретируем език за програмиране, разпространяван с повечето Уеб браузъри. Поддържа обектно-ориентиран и функционален стил на програмиране. Създаден е в Netscape през 1995 г. Най-често се прилага към HTML-а на Интернет страница с цел добавяне на функционалност и зареждане на данни. Може да се ползва също за писане на сървърни скриптове JSON, както и за много други приложения. JavaScript не трябва да се бърка с Java, съвпадението на имената е резултат от маркетингово решение на Netscape. JavSscript е стандартизиран под името Java.`,
    author: 'Брендан Айк',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
  },
  {
    title: 'jQuery',
    description: `jQuery е разпространена алтернатива на JavaScript, публикувана в началото на 2006 от Джон Резиг. В основата си jQuery опростява достъпа до всеки елемент на дадена уеб-страница, като по този начин позволява лесно изграждане на динамична функционалност в страниците.
jQuery е безплатен и open source софтуер, лицензиран под MIT лиценз. jQuery се използва в 55% от 10000-те най-посещавани сайтове, което я прави най-популярната JavaScript алтернатива днес.[1][2].`,
    author: 'Джон Резиг',
    image: 'https://joebuckle.me/wp-content/uploads/2015/09/jquery-logo.png'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private articles:  { title: string, description: string, author: string, image: string } [];
  private article: { title: string, description: string, author: string, image: string };

  constructor() {
    this.articles = new Data(articleData).getData();
    this.article = this.articles[0];
  }

  articleNameReceived(title) {
    this.article = this.articles.filter(obj => {
      return obj.title === title;
    })[0];
  }
}
