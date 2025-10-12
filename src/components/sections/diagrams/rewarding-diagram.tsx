

const DiagramNode = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-card/80 backdrop-blur-sm border-primary/20 p-4 text-center flex flex-col items-center justify-center text-card-foreground h-full rounded-lg">
    <div className="p-3 bg-primary/10 rounded-full mb-3 w-fit">
      {icon}
    </div>
    <p className="font-bold text-sm text-foreground">{title}</p>
    <p className="text-xs text-muted-foreground mt-1">{description}</p>
  </div>
);

export function RewardingDiagram() {
  return (
    <div className="relative w-full font-sans">
      <h3 className="text-center font-bold text-lg mb-6 text-primary">Rewarding System Contributions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <DiagramNode 
          icon={<svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
          title="Development" 
          description="Code commits, bug fixes, and feature proposals."
        />
        <DiagramNode 
          icon={<svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
          title="Community" 
          description="Content creation, moderation, and user support."
        />
        <DiagramNode 
          icon={<svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
          title="Governance" 
          description="Voting on proposals and active participation."
        />
        <DiagramNode 
          icon={<svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10m16-10v10M9 3v18m6-18v18" /></svg>}
          title="Staking" 
          description="Locking tokens to secure the network."
        />
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-3 text-center p-3 rounded-lg bg-primary/10 backdrop-blur-sm">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M4 17v4m-2-2h4m11-1a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H9" /></svg>
            <p className="font-semibold text-sm text-primary">All contributions are valued and rewarded to foster a vibrant ecosystem.</p>
        </div>
      </div>
    </div>
  )
}
