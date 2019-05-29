export class Picture {
    id: string;
    description: string;
    picture: string;
    likes: number;
    liked: boolean;
    mine: boolean;
    privacy: string;
    shared: boolean = false;
}
