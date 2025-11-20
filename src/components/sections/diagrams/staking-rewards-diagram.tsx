

const FlowStep = ({ icon, title, description, className }: { icon?: React.ReactNode, title: string, description: string, className?: string }) => (
  <div className={`bg-card/80 backdrop-blur-sm border-primary/20 p-4 text-center flex flex-col items-center justify-center text-card-foreground h-full rounded-lg ${className}`}>
    <div className="p-3 bg-primary/10 rounded-full mb-3 w-fit">
      {icon}
    </div>
    <p className="font-bold text-sm text-foreground">{title}</p>
    <p className="text-xs text-muted-foreground">{description}</p>
  </div>
);

const Arrow = () => (
    <div className="h-16 flex items-center justify-center">
        <svg className="w-8 h-8 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
    </div>
);

export function StakingRewardsDiagram() {
  return (
     <div className="relative w-full font-sans">
      <h3 className="text-center font-bold text-lg mb-6 text-primary">Staking Rewards Distribution Flow</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">
        <FlowStep 
          icon={<svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>}
          title="Total Rewards Pool" 
          description="1.703 Billion Exnus Tokens allocated for staking."
        />
        <Arrow />
        <FlowStep 
          icon={<svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
          title="Linear Vesting" 
          description="Distributed monthly over 10 years (120 months)."
        />
        <Arrow />
        <FlowStep 
          icon={<svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
          title="Active Stakers" 
          description="Rewards are distributed to users who stake their tokens."
        />
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-3 text-center p-3 rounded-lg bg-primary/10 backdrop-blur-sm">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            <p className="font-semibold text-sm text-foreground">This ensures long-term, sustainable rewards for community participation.</p>
        </div>
      </div>
    </div>
  )
}
