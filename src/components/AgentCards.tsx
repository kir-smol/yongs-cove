import Image from "next/image";

const AGENTS = [
  {
    name: "Agent Name",
    title: "Real Estate Agent",
    brokerage: "Brokerage Name",
    phone: "(555) 000-0000",
    email: "agent@example.com",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Agent Name",
    title: "Real Estate Agent",
    brokerage: "Brokerage Name",
    phone: "(555) 000-0000",
    email: "agent@example.com",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
];

export default function AgentCards() {
  return (
    <section id="agents" className="py-16 sm:py-20 bg-surface-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Your Agents</h2>
          <p className="mt-2 text-muted">
            Connect with our dedicated listing agents for Young&apos;s Cove
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {AGENTS.map((agent, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border p-6 flex flex-col items-center text-center"
            >
              <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-surface-warm">
                <Image
                  src={agent.photo}
                  alt={agent.name}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>

              <h3 className="text-lg font-bold text-foreground">{agent.name}</h3>
              <p className="text-sm text-muted">{agent.title}</p>
              <p className="text-xs text-muted mt-1">{agent.brokerage}</p>

              <div className="mt-4 space-y-2 w-full">
                <a
                  href={`tel:${agent.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-medium rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {agent.phone}
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 border-2 border-primary text-primary text-sm font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Agent
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
