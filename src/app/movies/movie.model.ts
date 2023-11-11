export class Movie {
    constructor(
        public title: string,
        public episode_id: number,
        public director: string,
        public releaseDate: string,
        public producer: string,
        public group: []
    ) {

    }
}