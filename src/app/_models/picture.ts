export class Picture {
    id: string;
    description: string;
    picture: string;
    likes: number;
    liked: boolean;
    mine: boolean;
    createdAt: string
    privacy: string;
    shared: boolean = false;
}
