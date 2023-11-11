export class Movie {
    constructor(
        public title: string,
        public episode_id: number,
        public opening_crawl: string,
        public director: string,
        public release_date: string,
        public producer: string,
        public characters: string[]
    ) {

    }
}