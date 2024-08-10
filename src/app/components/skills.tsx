const Skills: React.FC = () => {
    return (
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl mb-2 text-center sm:text-left">Skills</h2>
            <hr />
            <div className="bg-white shadow rounded-lg p-6 mb-6 text-black">
                <ul className="mt-3 list-disc list-inside space-y-2">
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>HTML & CSS</li>
                    <li>SQL</li>
                    <li>MacOS, Windows, Ubuntu</li>
                    <li>AWS</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;
