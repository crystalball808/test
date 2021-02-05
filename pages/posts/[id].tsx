import axios from 'axios';
import { GetServerSideProps } from 'next';
import { wrapper } from '../_app'

const PostPage = ({ post }) => {
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>{post.id}</p>
            {post.comments?.map(comment => <div key={comment.id}>
                <p>{comment.body}</p>
            </div>)}
        </>
    )
}

// export async function getServerSideProps(context) {
//     console.log(context);
//     const postId = context.query.id;
//     const post = await axios.get(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`);
//     return {
//         props: {
//             post
//         }
//     }
// }

export const getServerSideProps = wrapper.getServerSideProps(
    async ({store,req,res,query})=>{
        const post = await axios.get(`https://simple-blog-api.crew.red/posts/${query.id}?_embed=comments`);
        console.log(post.data);
        return {
            props: {
                post: post.data
            }
        }
    }
)

export default PostPage;