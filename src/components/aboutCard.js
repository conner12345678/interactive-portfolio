export default function AboutCard({ title, para }) {
    return(
        <div className="bg-[#1E293B] rounded-lg text-center p-2">
            <h1 className="text-[32px]">{title}</h1>
            <hr className="border-[#4ade80]"/>
            <p>{para}</p>
        </div>
    )
}