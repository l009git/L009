'use client';

import ContactForm from '@/hooks/ContactForm';
import Grid from '@/components/Grid/Grid';
import Card from '@/components/Card/Card';
import Small from '@/components/Small/Small';
import Title from '@/components/Title/Title';
import Paragraph from '@/components/Paragraph/Paragraph';
import Feedback from '@/components/Feedback/Feedback';
import Input from '@/components/Input/Input';
import Textarea from '@/components/Textarea/Textarea';
import Button from '@/components/Button/Button';
import Result from '@/components/Result/Result';
import Social from '@/components/Social/Social';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import List from '@/components/List/List';

export default function Home() {
  const { form, result, loading, handleChange, handleSubmit } = ContactForm();

  return (
    <>
      <Header />
      <Main>
        {/* Services */}
        <Grid columns={3} id="services">
          <Card>
            <Small>Serviço</Small>
            <Title>Automação de processos</Title>
            <Paragraph>Automatize tarefas repetitivas com macros avançadas. Ganhe produtividade, minimize falhas humanas e melhore a precisão das operações do seu negócio. Ideal para equipes que precisam focar no estratégico e deixar o operacional com a tecnologia.</Paragraph>
            <List>
              <li>Rotinas & Databases</li>
              <li>Integrações com sistemas</li>
              <li>Análise de dados</li>
            </List>
          </Card>
          <Card>
            <Small>Serviço</Small>
            <Title>Chatbot<br></br>Inteligentes</Title>
            <Paragraph>Implemente chatbots inteligentes e transforme seu atendimento com inteligência artificial. Ofereça respostas rápidas, reduza o tempo de espera e aumente a conversão de leads 24 horas por dia, 7 dias por semana. Ideal para empresas que desejam escalar o suporte com eficiência e personalização.</Paragraph>
            <List>
                <li>Whats. Telegram e Discord</li>
                <li>Agentes IA</li>
                <li>Fluxos personalizados</li>
            </List>
          </Card>
          <Card>
            <Small>Serviço</Small>
            <Title>Desenvolvimento de<br></br>aplicativos</Title>
            <Paragraph>Criamos aplicativos personalizados para web e dispositivos móveis (iOS e Android), desenvolvidos para resolver problemas específicos do seu negócio. Desde apps para gestão interna até plataformas para engajamento de clientes, entregamos soluções robustas e intuitivas que otimizam operações e abrem novas fontes de receita.</Paragraph>
            <List>
                <li>Android</li>
                <li>Design UI/UX</li>
            </List>
          </Card>
          <Card>
            <Small>Serviço</Small>
            <Title>Tráfego<br></br>pago</Title>
            <Paragraph>Aumente sua visibilidade e conversões com campanhas estratégicas de tráfego pago. Segmentação precisa, testes A/B e otimização contínua para maximizar o ROI. Conquiste resultados reais com mídia paga inteligente e mensurável.</Paragraph>
            <List>
                <li>Meta Ads</li>
                <li>Google Ads</li>
            </List>
          </Card>
        </Grid>

        {/* Contact */}
        <Grid columns={1} id={'contact'}>
          <Grid columns={3}>
            <Card>
              <Social href="https://wa.me/5516992399723?text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20oficial%20para%20tirar%20d%C3%BAvidas%20sobre%20os%20servi%C3%A7os%20prestados." icon="bi bi-whatsapp" label="Whatsapp"></Social>
            </Card>
            <Card>
              <Social href="https://t.me/L009TelegramBot" icon="bi bi-telegram" label="Telegram"></Social>
            </Card>
            <Card>
              <Social href="https://discord.gg/wtzmwMnG" icon="bi bi-discord" label="Discord"></Social>
            </Card>
          </Grid>
          <Card>
            <Title>Contato</Title>
            <Paragraph>Preencha os campos abaixo para que possamos entrar em contato com você posteriormente.</Paragraph>
            <Grid columns={3}>
              <Input
                placeholder="Nome completo"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                maxLength={250}
              />
              <Input
                placeholder="(00) 00000-0000"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                maxLength={250}
                mask={'phone'}
              />
              <Input
                placeholder="Assunto"
                value={form.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                maxLength={250}
              />
            </Grid>
            <Grid columns={1}>
              <Textarea
                placeholder="Mensagem"
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                maxLength={1000}
              />
                {result.message && <Result type={result.type || 'info'}>{result.message}</Result>}
              <Button onClick={handleSubmit} disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar'}
              </Button>
            </Grid>
          </Card>
        </Grid>
        {/* Feedbacks */}
        <Grid columns={4} id={'feedbacks'}>
          <Card>
            <Small>Feedback</Small>
            <Feedback avatar={'/images/avatar1.jpg'} name={'Ana P.'} />
            <Paragraph fontStyle='italic'>{'"O atendimento da L009 é excelente, sempre dispostos a ajudar. As automações que implementaram realmente transformaram a rotina da equipe, liberando tempo valioso para focarmos no que realmente importa. Uma parceria que superou nossas expectativas!"'}</Paragraph>
          </Card>
          <Card>
            <Small>Feedback</Small>
            <Feedback avatar={'/images/avatar2.jpg'} name={'Renato F.'} />
            <Paragraph fontStyle='italic'>{'"Com a L009, integramos vendas e financeiro de forma espetacular. Tudo ficou mais rápido e incrivelmente preciso. A otimização do fluxo de trabalho foi notável, impactando diretamente nossa produtividade e eficiência operacional."'}</Paragraph>
          </Card>
          <Card>
            <Small>Feedback</Small>
            <Feedback avatar={'/images/avatar3.jpg'} name={'Marina C.'} />
            <Paragraph fontStyle='italic'>{'"A plataforma da L009 é super intuitiva e fácil de usar, o que facilitou a adaptação de todos. O suporte da equipe é outro ponto forte, sempre rápido e eficiente para resolver qualquer dúvida. Recomendo a L009 para quem busca uma solução robusta e um parceiro confiável!"'}</Paragraph>
          </Card>
          <Card>
            <Small>Feedback</Small>
            <Feedback avatar={'/images/avatar4.jpg'} name={'Junior H.'} />
            <Paragraph fontStyle='italic'>
              {'"A L009 trouxe uma visão totalmente nova para nossos processos internos. As integrações personalizadas reduziram erros manuais e aumentaram a agilidade das entregas. Hoje conseguimos tomar decisões com base em dados reais e em tempo recorde."'}
            </Paragraph>
          </Card>
          <Card>
            <Small>Feedback</Small>
            <Feedback avatar={'/images/avatar5.jpg'} name={'Camila R.'} />
            <Paragraph fontStyle='italic'>
              {'"Desde que a L009 implementou as automações no nosso e-commerce, conseguimos reduzir erros operacionais e aumentar o volume de pedidos processados. A equipe é super atenciosa e sempre pronta para adaptar as soluções conforme nossas necessidades!"'}
            </Paragraph>
          </Card>
          <Card>
            <Small>Feedback</Small>
            <Feedback avatar={'/images/avatar6.jpg'} name={'Fernanda L.'} />
            <Paragraph fontStyle='italic'>
              {'"O chatbot desenvolvido pela L009 transformou nosso atendimento online. Hoje respondemos clientes em segundos, com uma experiência muito mais humana e personalizada. Uma das melhores decisões que tomamos!"'}
            </Paragraph>
          </Card>
          <Card>
            <Small>Feedback</Small>
            <Feedback avatar={'/images/avatar7.jpg'} name={'Isabela M.'} />
            <Paragraph fontStyle='italic'>
              {'"A campanha de tráfego pago criada pela L009 elevou nossas vendas em menos de um mês. A comunicação da equipe é excelente, e o acompanhamento de resultados é transparente e constante. Recomendo de olhos fechados!"'}
            </Paragraph>
          </Card>
          <Card>
            <Small>Feedback</Small>
            <Feedback avatar={'/images/avatar8.jpg'} name={'Beatriz S.'} />
            <Paragraph fontStyle='italic'>
              {'"O aplicativo personalizado que a L009 desenvolveu para nossa equipe de campo facilitou totalmente o controle de tarefas. Interface linda, simples e funcional. Ficamos impressionadas com a agilidade da entrega!"'}
            </Paragraph>
          </Card>
        </Grid>
      </Main>
      <Footer>
        <nav aria-label="Links principais">
          <Link href="/#home">Início</Link>
          <Link href="/#services">Serviços</Link>
          <Link href="/#contact">Contato</Link>
          <Link href="/#feedbacks">Feedbacks</Link>
          <Link href="/pages/terms">Termos de uso</Link>
          <Link href="/pages/policy">Políticas de privacidade</Link>
        </nav>
      </Footer>
    </>
  );
}
