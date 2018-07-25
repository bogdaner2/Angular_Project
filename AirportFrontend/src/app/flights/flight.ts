export class Flight {
    constructor(public id : number,
        public number : string,
        public pointOfDeparture  : string,
        public departureTime : string,
        public destination : string,
        public arrivelTime : string,
        public ticketsId : number []){ }
}
