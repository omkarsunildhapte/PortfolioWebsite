import { Component } from '@angular/core';

@Component({
  selector: 'app-servies',
  templateUrl: './servies.component.html',
  styleUrls: ['./servies.component.css']
})
export class ServiesComponent {
  items: any[] = [
    {
      title: 'Web Development',
      description: 'Web development is the process of creating and maintaining websites. It involves various disciplines such as web design, coding, and server management to deliver functional and visually appealing online experiences.',
      icon: 'fa-code'
    },
    {
      title: 'UI/UX Design',
      description: 'UI/UX design focuses on creating user-friendly interfaces and enhancing the overall user experience. It involves understanding user needs, conducting research, and designing intuitive interfaces that effectively communicate and engage users, resulting in delightful and seamless interactions.',
      icon: 'fa-hashtag'
    },
    {
      title: 'App Development',
      description: 'App development refers to the process of creating mobile applications for smartphones, tablets, or other mobile devices. It involves designing, coding, and testing the app to ensure it meets the desired functionality and user experience, and can be deployed on various app stores for users to download and use.',
      icon: 'fa-mobile-screen-button'
    },
    {
      title: 'AI Development',
      description: 'AI development involves creating intelligent systems that can perceive, learn, reason, and make decisions similar to human intelligence. It encompasses machine learning, neural networks, natural language processing, and other techniques to build applications that can automate tasks, provide insights, and improve decision-making processes.',
      icon: 'fa-robot'
    },
    {
      title: 'Machine Learning Development',
      description: 'Machine Learning Development involves building algorithms and models that enable computers to learn and make predictions or decisions based on data. It involves data preprocessing, model training, and evaluation to create intelligent systems that can automatically improve and adapt over time.',
      icon: 'fa-brain'
    },
    {
      title: 'Cloud Development',
      description: 'Cloud development is the process of creating and deploying applications, services, and infrastructure on cloud platforms. It involves leveraging cloud computing resources, such as storage, databases, and computing power, to build scalable, flexible, and reliable solutions that can be accessed and managed remotely over the internet.',
      icon: 'fa-cloud'
    },
    {
      title: 'Testing and Debugging',
      description: 'Testing is an essential phase in software development that ensures the quality and reliability of the product. It involves systematically validating and verifying software functionalities, identifying bugs and issues, and ensuring the software meets the specified requirements before release.',
      icon: 'fa-bug'
    },
    {
      title: 'Backend Development',
      description: 'Backend development involves creating the server-side logic and infrastructure of a website or application. It focuses on handling data, processing requests, and ensuring smooth functionality behind the scenes, often utilizing technologies such as databases, APIs, and server frameworks.',
      icon: 'fa-server'
    },
    {
      title: 'Database Development',
      description: 'Database design and development involve creating efficient and structured databases to store and manage data effectively. It includes defining data models, designing tables, establishing relationships, and implementing data integrity rules to ensure accurate and secure storage, retrieval, and manipulation of information.',
      icon: 'fa-database'
    }
  ];

  itemGroups: any[] = [];

  ngOnInit() {
    this.groupItems();
    window.addEventListener('resize', this.groupItems.bind(this));
  }

  groupItems() {
    const isMobile = window.innerWidth < 768;
    const groupSize = isMobile ? 1 : 3;
    const totalItems = isMobile ? this.items.length : Math.ceil(this.items.length / groupSize) * groupSize;
    const totalGroups = Math.ceil(totalItems / groupSize);

    this.itemGroups = [];

    for (let i = 0; i < totalGroups; i++) {
      const startIndex = i * groupSize;
      const endIndex = startIndex + groupSize;
      const group = this.items.slice(startIndex, endIndex);
      this.itemGroups.push(group);
    }
  }

  isActiveGroup(index: number): boolean {
    const activeItemIndex = Array.from(document.querySelectorAll('.carousel-item')).findIndex(
      item => item.classList.contains('active')
    );
    const activeGroupIndex = Math.floor(activeItemIndex / 3);
    return index === activeGroupIndex;
  }
}