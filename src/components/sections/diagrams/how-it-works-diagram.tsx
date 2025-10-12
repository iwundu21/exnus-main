
const DiagramNode = ({ icon, label, className }: { icon: React.ReactNode, label: string, className?: string }) => (
    <div className={`flex flex-col items-center justify-center text-center gap-2 p-3 bg-card/80 backdrop-blur-sm border-primary/20 rounded-lg ${className}`}>
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
            {icon}
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
             <DiagramNode icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>} label="Development" />
             <DiagramNode icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>} label="Community" />
             <DiagramNode icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>} label="Content" />
        </div>
    </div>
);

const RewardsDiagram = () => (
    <div className="w-full grid grid-cols-3 items-center justify-items-center gap-2">
        <DiagramNode icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3"></path><circle cx="12" cy="12" r="2"></circle><path d="M8.464 8.464l1.414-1.414m5.657 5.657l1.414-1.414M8.464 15.536l1.414 1.414m5.657-5.657l1.414 1.414"></path></svg>} label="Contribution Validated" />
        <Arrow />
        <DiagramNode icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>} label="Rewards Distributed" />
    </div>
);

const GovernDiagram = () => (
    <div className="w-full grid grid-cols-3 items-center justify-items-center gap-2">
        <DiagramNode icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>} label="Stake Tokens" />
        <Arrow />
        <DiagramNode icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>} label="Gain Voting Power" />
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
