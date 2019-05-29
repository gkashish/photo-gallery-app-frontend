export class Album {
    id: string;
    name: string;
    description: string;
    coverPic: string;
    likes: number;
    liked: boolean;
    mine: boolean;
    privacy: string;
    shared: boolean = false;
}
