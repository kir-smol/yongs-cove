import { AGENTS } from "@/data/property";

export default function AgentCards() {
  return (
    <section id="agents" className="py-16 sm:py-20 bg-surface-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Your Agents</h2>
          <p className="mt-2 text-muted">
            Connect with the listing agents for 13 East Vista Terrace
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {AGENTS.map((agent, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border p-6 flex flex-col items-center text-center"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-surface-warm bg-primary/10 flex items-center justify-center">
                {agent.photo ? (
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg className="w-14 h-14 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                )}
              </div>

              <h3 className="text-lg font-bold text-foreground">{agent.name}</h3>
              <p className="text-sm text-muted">{agent.title}</p>
              <p className="text-xs text-primary font-medium mt-1">{agent.brokerage}</p>
              <p className="text-xs text-muted mt-0.5">{agent.brokerageAddress}</p>

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
                {agent.officePhone && agent.officePhone !== agent.phone && (
                  <a
                    href={`tel:${agent.officePhone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 border-2 border-primary text-primary text-sm font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Office: {agent.officePhone}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
