import Reveal from './Reveal';

export default function ClosingMessage() {
  return (
    <section className="px-6 py-32 text-center sm:py-48 lg:py-64">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-12 h-px w-12 bg-[#3B82F6]" />
          <p className="text-2xl font-semibold leading-[1.5] tracking-[0.01em] text-[#1E3A5F] sm:text-3xl lg:text-[2.5rem]">
	    Merci pour votre confiance.
	    
	   </p>
<br />
	   <p className="text-2xl font-light leading-[1.5] tracking-[0.01em] text-[#1E3A5F] sm:text-3xl lg:text-[2rem]">

            Je vous recontacterai très prochainement.
            <br />
	    <br />
            En attendant, je vous souhaite une excellente découverte de l’accompagnement.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
