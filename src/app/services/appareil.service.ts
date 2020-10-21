export class AppareilService{
  appareils = [
    {
      name : 'Machine à laver',
      status : 'éteint'
    },
    {
      name : 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  switchOnAll(){
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll(){
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  // tslint:disable-next-line:typedef
  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }

  // tslint:disable-next-line:typedef
  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
