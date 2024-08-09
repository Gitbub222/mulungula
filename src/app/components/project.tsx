const Project: React.FC = () => {
    return (
        <div className="bg-white shadow rounded-lg p-6 mb-6 text-black">
            <h3 className="text-xl font-semibold mb-2"><a className="text-primary" href="/projects/voxai">VoxAI</a></h3>
            <p className="text-text-secondary mb-4">An autonomous learning assistant designed to streamline and enhance the educational experience through AI-driven interactions and adaptive learning technologies.</p>
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-secondary text-text-secondary px-2 py-1 rounded-full text-sm">AI &amp; Machine Learning</span>
                <span className="bg-secondary text-text-secondary px-2 py-1 rounded-full text-sm">Completed</span>
            </div>
            <a href="https://www.youtube.com/watch?v=L_BydgDq2Mw&amp;feature=youtu.be" target="_blank" rel="noopener noreferrer" className="text-primary mr-4">View Demo</a>
            <a href="https://github.com/aidanandrews22/VoxAI" target="_blank" rel="noopener noreferrer" className="text-primary">View on GitHub</a>
        </div>
    )
}

export default Project