
const DiagramNode = ({ label, className }: { label: string, className?: string }) => (
    <div className={`flex flex-col items-center justify-center text-center gap-2 p-3 bg-card/80 backdrop-blur-sm border-primary/20 rounded-lg ${className}`}>
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
            
        </div>
        <span className="text-xs font-medium text-foreground">{label}</span>
    </div>
);

const Arrow = () => (
    <div className="flex items-center justify-center w-full">
        <svg className="w-6 h-6 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
    </div>
);

const ContributeDiagram = () => (
    <div className="w-full flex flex-col items-center justify-center gap-4">
        <div className="grid grid-cols-3 gap-4 w-full">
             <DiagramNode label="Development" />
             <DiagramNode label="Community" />
             <DiagramNode label="Content" />
        </div>
    </div>
);

const RewardsDiagram = () => (
    <div className="w-full grid grid-cols-3 items-center justify-items-center gap-2">
        <DiagramNode label="Contribution Validated" />
        <Arrow />
        <DiagramNode label="Rewards Distributed" />
    </div>
);

const GovernDiagram = () => (
    <div className="w-full grid grid-cols-3 items-center justify-items-center gap-2">
        <DiagramNode label="Stake Tokens" />
        <Arrow />
        <DiagramNode label="Gain Voting Power" />
    </div>
);


export function HowItWorksDiagram({ variant }: { variant: 'contribute' | 'rewards' | 'govern' }) {
    switch (variant) {
        case 'contribute':
            return <ContributeDiagram />;
        case 'rewards':
            return <RewardsDiagram />;
        case 'govern':
            return <GovernDiagram />;
        default:
            return null;
    }
}
