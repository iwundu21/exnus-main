
'use client';

export default function GlassmorphismBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-background" />
        <div className="absolute top-[-20%] left-[10%] w-[40rem] h-[40rem] bg-primary/10 rounded-full filter blur-[150px] animate-blob-1" />
        <div className="absolute top-[10%] right-[-10%] w-[30rem] h-[30rem] bg-accent/10 rounded-full filter blur-[120px] animate-blob-2" />
        <div className="absolute bottom-[-20%] left-[20%] w-[35rem] h-[35rem] bg-secondary/10 rounded-full filter blur-[140px] animate-blob-3" />
        <div className="absolute bottom-[5%] right-[5%] w-[25rem] h-[25rem] bg-primary/5 rounded-full filter blur-[100px] animate-blob-4" />
        <style jsx>{`
            @keyframes blob-1 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(40px, -60px) scale(1.1); }
                50% { transform: translate(-20px, 20px) scale(0.9); }
                75% { transform: translate(30px, 40px) scale(1.05); }
            }
            @keyframes blob-2 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(-30px, 50px) scale(0.95); }
                50% { transform: translate(20px, -20px) scale(1.1); }
                75% { transform: translate(-40px, -30px) scale(1); }
            }
            @keyframes blob-3 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(50px, -30px) scale(1.05); }
                50% { transform: translate(-40px, 40px) scale(1); }
                75% { transform: translate(20px, -50px) scale(0.9); }
            }
            @keyframes blob-4 {
                0%, 100% { transform: translate(0, 0) scale(1); }
                25% { transform: translate(-20px, 20px) scale(1); }
                50% { transform: translate(30px, -30px) scale(1.1); }
                75% { transform: translate(-40px, 50px) scale(0.95); }
            }
            .animate-blob-1 { animation: blob-1 30s infinite ease-in-out; }
            .animate-blob-2 { animation: blob-2 25s infinite ease-in-out; }
            .animate-blob-3 { animation: blob-3 35s infinite ease-in-out; }
            .animate-blob-4 { animation: blob-4 28s infinite ease-in-out; }
        `}</style>
    </div>
  );
}
