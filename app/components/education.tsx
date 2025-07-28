export default function Education() {
    return (
        <>
            <h2 className="text-xl font-bold">Education</h2>
            <div className="flex justify-start gap-4 my-4">
                <div className="bg-[url('/uni.png')] size-12 bg-cover rounded-lg"></div>
                <div>
                    <h3 className="font-bold">Parul university</h3>
                    <p className="text-sm text-[#a3a3a3]">
                        Computer Science and Engineering
                    </p>
                </div>
                <div className="text-[#a3a3a3] ml-auto mr-0">2024 - 2028</div>
            </div>
        </>
    );
}
