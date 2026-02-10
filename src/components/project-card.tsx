import { Badge } from "./ui/badge";

export function ProjectCard({
    title,
    description,
    skills = [],
}: {
    title: string;
    description: string;
    skills: string[];
}) {
    return (
        <div className='p-9 inset-shadow-[0_0_15px_rgba(0,0,0,0.9)] rounded-[20px] bg-card/50 flex-col flex'> 
            <div className='text-center text-[13px] font-medium'>{title}</div>
            <hr className='my-2 opacity-50' />
            <p className='text-[12px] text-muted-foreground whitespace-pre-wrap font-thin'>{description}</p>
            <hr className='my-2 w-full max-w-50 self-center opacity-50' />
            <div className="flex w-full flex-wrap justify-center gap-2">
                {skills.map((skill) => (
                    <Badge className='text-[9px] font-extralight bg-foreground/5 border-muted-foreground/10 text-[rgb(120,120,120)]' key={skill}>{skill}</Badge>
                ))}
            </div>
        </div>
    );
}
