


export default function ProjectCard({img, title, description}) {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <img className="h-[280px] object-cover" src={img} alt="title image" />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}