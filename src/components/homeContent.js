export default function HomeConotent({ title, content }){
    return (
        <div className="container items-center m-3 p-2 bg-[#38BDF8]">
            <div className="title text-[22px] text-center">
                <p>{title}</p>
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    )
}