const limits = [
  {
    title: "No barge-in",
    body: "You cannot interrupt a reply. The microphone is muted while the agent speaks.",
  },
  {
    title: "Short words can be missed",
    body: "In a 50-trial replay, the one-word utterance \"Hello.\" was missed 14% of the time by the voice activity detector. The cause is narrowed to its onset confirmation rule and is not fixed.",
  },
  {
    title: "An unexplained stall",
    body: "In browser testing, a call has stopped answering after about two exchanges. It did not reproduce through the gRPC path, and the cause is unknown.",
  },
  {
    title: "Not tested",
    body: "Concurrent calls, background noise, and real accents. The benchmark audio is synthetic.",
  },
];

export default function Limits() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-16 border-t border-border">
      <h2 className="text-2xl font-bold tracking-tight mb-6">What it does not do yet</h2>
      <dl className="space-y-5">
        {limits.map((item) => (
          <div key={item.title}>
            <dt className="font-medium mb-1">{item.title}</dt>
            <dd className="text-secondary-text leading-relaxed">{item.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
