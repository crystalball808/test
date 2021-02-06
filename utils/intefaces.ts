export interface PostInterface {
        id: number,
        title: string,
        body: string
    }

export interface Comment {
    postId: number,
    body: string,
    id: number
}

export interface NewPost {
    title: string,
    body: string
}

export interface RootState {
    posts: Array<PostInterface>
}