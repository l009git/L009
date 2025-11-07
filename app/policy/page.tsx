'use client';

import ContactForm from '@/hooks/ContactForm';
import Grid from '@/components/Grid/Grid';
import Card from '@/components/Card/Card';
import Small from '@/components/Small/Small';
import Title from '@/components/Title/Title';
import Paragraph from '@/components/Paragraph/Paragraph';
import List from '@/components/List/List';
import Input from '@/components/Input/Input';
import Textarea from '@/components/Textarea/Textarea';
import Button from '@/components/Button/Button';
import Result from '@/components/Result/Result';
import Social from '@/components/Social/Social';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';

export default function Home() {
  const { form, result, loading, handleChange, handleSubmit } = ContactForm();

  return (
    <>
      <Header />
      <Main>
        {/* Services */}
        <Grid columns={1} id="terms">
          <Card>
            <Small>Informativo</Small>
            <Title>Políticas de privacidade</Title>
            <Paragraph>A L009 valoriza a sua privacidade e a transparência em relação aos seus dados. Gostaríamos de informar que <strong>todos os dados utilizados em nossos serviços são fornecidos diretamente por você, o usuário</strong>, no momento do contato ou da interação com nossas plataformas e serviços.</Paragraph>
            <Paragraph><strong>Dados Fornecidos pelo Usuário:</strong> Ao utilizar nossos serviços, você pode nos fornecer informações como seu nome, e-mail, número de telefone e outras informações relevantes para a prestação dos nossos serviços de chatbots, automação de rotinas e desenvolvimento de APIs.</Paragraph>
            <Paragraph>
              <strong>Uso dos Dados:</strong> Os dados fornecidos por você são utilizados exclusivamente para os seguintes propósitos:
              <List>
                  <li>Para responder às suas consultas e solicitações.</li>
                  <li>Para fornecer os serviços contratados, como o desenvolvimento e a implementação de chatbots, automações e APIs.</li>
                  <li>Para comunicação relacionada aos serviços, incluindo atualizações e informações relevantes.</li>
                  <li>Para melhorar e personalizar sua experiência com nossos serviços.</li>
              </List>
            </Paragraph>
            <Paragraph><strong>Compartilhamento de Dados:</strong> A L009 não compartilha seus dados pessoais com terceiros para fins de marketing ou outros propósitos que não estejam diretamente relacionados à prestação dos serviços que você solicitou. Em casos específicos onde o compartilhamento de dados seja necessário para a execução dos serviços (por exemplo, com ferramentas de terceiros utilizadas na implementação de um chatbot), você será devidamente informado e seu consentimento será obtido quando necessário.</Paragraph>
            <Paragraph><strong>Segurança dos Dados:</strong> Implementamos medidas de segurança razoáveis para proteger os dados que você nos fornece contra acesso não autorizado, uso indevido, alteração ou destruição. No entanto, é importante lembrar que nenhuma transmissão de dados pela internet é completamente segura e não podemos garantir a segurança absoluta das informações transmitidas.</Paragraph>
            <Paragraph><strong>Seus Direitos:</strong> Você tem o direito de acessar, corrigir ou solicitar a exclusão dos dados pessoais que nos forneceu. Para exercer esses direitos ou em caso de dúvidas sobre esta política, entre em contato conosco através dos canais de comunicação disponíveis.</Paragraph>
            <Paragraph>Ao utilizar os serviços da L009, você confirma que leu, entendeu e concorda com esta Política de Privacidade, ciente de que todos os dados utilizados são de sua exclusiva proveniência.</Paragraph>
          </Card>
        </Grid>

        {/* Contact */}
        <Grid columns={1} id={'contact'}>
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
        </Grid>
      </Main>
      <Footer>
        <nav aria-label="Links principais">
          <Link href="/#home">Início</Link>
          <Link href="/">Página inicial</Link>
          <Link href="/#contact">Contato</Link>
          <Link href="/terms">Termos de uso</Link>
        </nav>
      </Footer>
    </>
  );
}
