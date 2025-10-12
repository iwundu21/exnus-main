

const FlowStep = ({ icon, title, description, isArrow = false }: { icon?: React.ReactNode, title: string, description: string, isArrow?: boolean }) => (
  <div className="flex flex-col items-center text-center w-full">
    {isArrow ? (
      <div className="h-full flex items-center justify-center">{icon}</div>
    ) : (
      <div className="bg-card/80 backdrop-blur-sm border-primary/20 p-4 h-full flex flex-col items-center justify-center text-card-foreground rounded-lg">
        <div className="p-3 bg-primary/10 rounded-full mb-3 w-fit">
          {icon}
        </div>
        <p className="font-bold text-sm text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    )}
  </div>
);

const Arrow = () => (
    <svg className="w-8 h-8 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
    </svg>
);

export function StakingModelDiagram() {
  return (
     <div className="relative w-full font-sans">
      <h3 className="text-center font-bold text-lg mb-6 text-primary">Locked Staking Model</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">
        <FlowStep 
          icon={<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
          title="1. Stake Tokens" 
          description="Users commit their Exnus tokens to the staking contract."
        />
        <FlowStep 
          icon={<Arrow />}
          title=""
          description=""
          isArrow
        />
        <FlowStep 
          icon={<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
          title="2. Monthly Lock-in" 
          description="Tokens are locked for a defined monthly period."
        />
        <FlowStep 
          icon={<Arrow />}
          title=""
          description=""
          isArrow
        />
        <FlowStep 
          icon={<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
          title="3. High Rewards" 
          description="Longer lock periods unlock higher APY."
        />
      </div>
    </div>
  )
}
