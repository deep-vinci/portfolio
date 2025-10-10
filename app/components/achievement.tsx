type Achievements = {
    logo: string
    name: string
    date: string
    desc: string
}

const achievements: Achievements[] = [
    {
        logo: "/sih.png",
        name: "SIH University finalist out of 730 teams",
        date: "2025",
        desc: "Achieved Top 45 finalist position (out of 730 teams) after placing 3rd in Round 2 of a university-level innovation contest."
    }
] 

export default function Achievements() {
    return <>
            <h2 className="text-xl font-bold">Achievements</h2>
            {achievements.map((achievement) => (
                <div
                    key={achievement.name}
                    className="flex justify-start gap-4 my-4 cursor-pointer hover:scale-101 duration-200"
                >
                    <div
                        className="shrink-0 size-12 bg-cover rounded-lg"
                        style={{ backgroundImage: `url(${achievement.logo})` }}
                    ></div>
                    
                    <div>
                        <h3 className="font-bold">{achievement.name}</h3>
                        <p className="text-sm text-gray-700 dark:text-[#bcbcbc]">
                            {achievement.desc}
                        </p>
                    </div>
                    <div className="bg-green-900 text-green-300 text-xs px-2 py-1 rounded-full font-bold h-full text">Ongoing</div>

                    <div className=" shrink-0 text-gray-700 dark:text-[#bcbcbc] ml-auto mr-0">
                        {achievement.date}
                        {/* <button className="bg-[#0091004c] text-[#009100] font-bold px-3 py-1 text-sm rounded-full">
                            more
                        </button> */}
                    </div>
                </div>
            ))
            }
        </>

}