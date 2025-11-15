import Container from './Container'

export default function Section(props: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="mt-16">
      <Container>
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">{props.title}</h2>
          {props.subtitle && <p className="text-white/70 mt-2">{props.subtitle}</p>}
        </div>
        {props.children}
      </Container>
    </section>
  )
}
