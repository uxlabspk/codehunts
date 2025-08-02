
interface OurStackSectionProp {
    image: string,
    title: string
}


export default function OurStackSection({ image, title }: OurStackSectionProp) {
    return (
        <div className={'flex flex-col items-center justify-center border rounded-lg gap-4 bg-accent p-5'}>
            <img src={image} alt={title} className={'w-16'} />
            <h1>{title}</h1>
        </div>
    )
}