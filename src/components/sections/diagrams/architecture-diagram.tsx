

const DiagramNode = ({ icon, title, description, className }: { icon: React.ReactNode, title: string, description: string, className?: string }) => (
  <div className={`bg-card/80 backdrop-blur-sm border-primary/20 p-4 text-center flex flex-col items-center justify-center text-card-foreground rounded-lg ${className}`}>
    <div className="p-2 bg-primary/10 rounded-full mb-2 w-fit">
      {icon}
    </div>
    <p className="font-bold text-sm text-foreground">{title}</p>
    <p className="text-xs text-muted-foreground">{description}</p>
  </div>
);

const DiagramGroup = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="w-full">
        <h4 className="text-center text-sm font-semibold text-foreground/70 mb-2">{title}</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {children}
        </div>
    </div>
);

const Arrow = () => (
    <div className="flex justify-center my-4">
        <svg className="w-6 h-6 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
    </div>
);

export function ArchitectureDiagram() {
  return (
    <div className="w-full font-sans p-4 rounded-lg">
      <h3 className="text-center font-bold text-lg mb-6 text-primary">Exnus Protocol Architecture</h3>
      
      <div className="flex flex-col items-center gap-4">

        <DiagramNode icon={<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} title="User Interaction Layer" description="Web & Mobile dApps" className="w-full max-w-xs" />
        <Arrow />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
           <DiagramNode icon={<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>} title="Contribution Tracking" description="Validates user activities" />
           <DiagramNode icon={<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} title="Reward Calculation" description="Computes rewards dynamically" />
        </div>
        <Arrow />
        
        <DiagramNode icon={<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V3m0 18v-3m8.485-8.485l-2.122-2.122M5.636 5.636L7.757 7.757m12.728 0l-2.122 2.122M5.636 18.364l2.122-2.122m12.728 0l-2.122-2.122M5.636 18.364l2.122-2.122" /><circle cx="12" cy="12" r="2" /></svg>} title="Smart Contract Layer" description="Automated logic on Solana" className="w-full max-w-xs" />
        <Arrow />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <DiagramNode icon={<svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>} title="Governance" description="DAO Voting" />
          <DiagramNode icon={<svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m4.632 2.684C15.114 12.938 15 12.482 15 12s.114-.938.316-1.342M9 6a3 3 0 100-6 3 3 0 000 6zm6 0a3 3 0 100-6 3 3 0 000 6zm-3 6a3 3 0 100-6 3 3 0 000 6zm-3 9a3 3 0 100-6 3 3 0 000 6zm6 0a3 3 0 100-6 3 3 0 000 6z" /></svg>} title="Solana Blockchain" description="High-performance L1" />
          <DiagramNode icon={<svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10m16-10v10M9 3v18m6-18v18" /></svg>} title="Off-Chain Services" description="Oracles & Data APIs" />
          <DiagramNode icon={<svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>} title="Analytics" description="Dashboards" />
        </div>
      </div>
    </div>
  )
}
