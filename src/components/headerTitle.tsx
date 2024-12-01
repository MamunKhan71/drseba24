"use client"
const HeaderTitle = ({ title }: { title: string }) => {
    return (
        <div>
            <h2
                className="text-3xl md:text-4xl font-bold text-left text-foreground w-full"
            >
                {title}
            </h2>
        </div>
    )
}

export default HeaderTitle