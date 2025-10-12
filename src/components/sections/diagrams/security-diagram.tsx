

const DiagramNode = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-card/80 backdrop-blur-sm border-primary/20 p-4 text-center flex flex-col items-center justify-center text-card-foreground h-full rounded-lg">
    <div className="p-3 bg-primary/10 rounded-full mb-3 w-fit">
      {icon}
    </div>
    <p className="font-bold text-sm text-foreground">{title}</p>
    <p className="text-xs text-muted-foreground mt-1">{description}</p>
  </div>
);

export function SecurityDiagram() {
  return (
    <div className="relative w-full font-sans">
      <h3 className="text-center font-bold text-lg mb-6 text-primary">Smart Contract Security Layers</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="grid grid-rows-2 gap-6">
            <DiagramNode 
              icon={<svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3v3m-3-3v3m-3-3v3M4 3h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" /></svg>} 
              title="Formal Verification" 
              description="Mathematical proof of contract correctness to prevent logical flaws."
            />
            <DiagramNode 
              icon={<svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
              title="Sybil Attack Prevention" 
              description="Mechanisms to prevent manipulation via fake identities."
            />
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
             <div className="w-px h-full bg-border/50 hidden md:block"></div>
             <div className="bg-primary/10 border-primary/50 p-4 text-center flex flex-col items-center justify-center text-card-foreground rounded-lg">
                <svg className="w-10 h-10 text-primary mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                <p className="font-bold text-base text-primary">Secure Core</p>
                <p className="text-xs text-muted-foreground">Exnus Protocol Smart Contracts</p>
            </div>
             <div className="w-px h-full bg-border/50 hidden md:block"></div>
        </div>

        <div className="grid grid-rows-2 gap-6">
            <DiagramNode 
                icon={<svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>} 
                title="Comprehensive Audits" 
                description="Third-party audits to identify and fix vulnerabilities before deployment."
            />
            <DiagramNode 
                icon={<svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>} 
                title="Fail-Safe Mechanisms" 
                description="Emergency controls like contract pauses to mitigate potential threats."
            />
        </div>
      </div>
    </div>
  )
}
