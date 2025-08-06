export const ValueSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Embed AI where the value is</h2>
          <p className="text-xl text-gray-600 mb-8">
            Drive value for Work, Process, and Service today and tomorrow as your AI needs expand:
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "AI for Work",
                description:
                  "Empower employees with intelligent assistants that enhance productivity and decision-making.",
              },
              {
                title: "AI for Process",
                description: "Automate complex workflows and optimize business processes with intelligent automation.",
              },
              {
                title: "AI for Service",
                description: "Transform customer experiences with AI-powered service agents and support systems.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
