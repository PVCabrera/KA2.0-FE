export default function Gallery({ params }: {
    params: {id: string }
}){
    return <h1>ID test: {params.id}</h1>
}