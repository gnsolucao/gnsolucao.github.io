import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E1E2F] text-[#EDEDED] font-sans">
      <header className="bg-[#1E1E2F] p-6 shadow-md border-b border-[#2E2E40]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">GN Soluções Digitais</h1>
          <nav className="space-x-6 text-sm">
            <a href="#about" className="hover:text-[#8BD3DD] transition">Sobre</a>
            <a href="#services" className="hover:text-[#8BD3DD] transition">Serviços</a>
            <a href="#contact" className="hover:text-[#8BD3DD] transition">Contato</a>
          </nav>
        </div>
      </header>

      <section className="py-28 px-6 text-center" id="hero">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-light mb-6 leading-tight tracking-tight">
            Soluções digitais sob medida para sua empresa crescer
          </h2>
          <p className="text-lg text-[#A7A9BE] mb-8 leading-relaxed">
            Desenvolvemos sistemas personalizados que otimizam processos, reduzem custos e aumentam a eficiência operacional.
          </p>
          <Button className="bg-[#8BD3DD] text-[#1E1E2F] text-base px-8 py-4 rounded-3xl font-semibold hover:brightness-110">
            Solicite uma proposta
          </Button>
        </motion.div>
      </section>

      <section className="py-24 px-6 text-center bg-[#1E1E2F]" id="about">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-4xl font-semibold mb-6 tracking-tight">Quem somos</h3>
          <p className="text-[#A7A9BE] text-lg leading-relaxed">
            A GN Soluções Digitais é uma empresa jovem e comprometida com o desenvolvimento de software de alta qualidade. Nosso foco é entender as necessidades reais dos nossos clientes e entregar soluções tecnológicas que tragam resultados concretos. Tecnologia com propósito, feita para escalar o seu negócio.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-[#1E1E2F]" id="services">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-semibold mb-16 tracking-tight">Nossos serviços</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div 
              className="col-span-1"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm text-white rounded-3xl shadow-xl border border-white/10">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium mb-3">Sistemas personalizados</h4>
                  <p className="text-[#A7A9BE]">
                    Desenvolvimento de software sob medida para atender exatamente às demandas do seu negócio.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div 
              className="col-span-1"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm text-white rounded-3xl shadow-xl border border-white/10">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium mb-3">Consultoria de processos</h4>
                  <p className="text-[#A7A9BE]">
                    Análise e mapeamento de processos com foco em digitalização, automação e eficiência.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div 
              className="col-span-1"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm text-white rounded-3xl shadow-xl border border-white/10">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium mb-3">Integrações e automações</h4>
                  <p className="text-[#A7A9BE]">
                    Integramos sistemas e criamos automações para eliminar tarefas repetitivas e aumentar a produtividade.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#1E1E2F] text-center" id="contact">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-4xl font-semibold mb-6 tracking-tight">Vamos conversar?</h3>
          <p className="text-[#A7A9BE] mb-8 text-lg leading-relaxed">
            Entre em contato e descubra como a GN Soluções Digitais pode ajudar sua empresa a evoluir com tecnologia.
          </p>
          <a
            href="mailto:contato@gnsolucoes.com"
            className="inline-flex items-center gap-2 bg-[#8BD3DD] text-[#1E1E2F] px-8 py-4 rounded-3xl font-semibold hover:brightness-110 transition"
          >
            <Mail size={18} /> contato@gnsolucoes.com
          </a>
        </motion.div>
      </section>

      <footer className="bg-[#1E1E2F] text-center text-[#A7A9BE] py-6 text-sm border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} GN Soluções Digitais. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
