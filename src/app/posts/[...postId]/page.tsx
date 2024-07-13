export default function PostDetail ({params} : {params: {postId: string}}) {
    return (
        <div>Post Detail {params.postId[0]}</div>
    )
}