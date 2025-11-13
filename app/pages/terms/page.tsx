'use client';

import ContactForm from '@/hooks/ContactForm';
import Grid from '@/components/Grid/Grid';
import Card from '@/components/Card/Card';
import Small from '@/components/Small/Small';
import Title from '@/components/Title/Title';
import Paragraph from '@/components/Paragraph/Paragraph';
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
            <Title>Termos de uso</Title>
            <Paragraph>Ao acessar e utilizar os serviços oferecidos pela L009 (incluindo o site L009.com.br e qualquer outro meio de comunicação), você concorda com os seguintes Termos de Uso. Por favor, leia atentamente este documento.</Paragraph>
            <Paragraph><strong>Aceitação dos Termos:</strong> Ao utilizar nossos serviços, você declara que tem capacidade legal para celebrar este acordo e que concorda em cumprir todos os termos e condições aqui estabelecidos.</Paragraph>
            <Paragraph><strong>Descrição dos Serviços:</strong> A L009 oferece soluções de chatbots inteligentes, automação de rotinas e desenvolvimento de APIs, visando aumentar a produtividade, reduzir custos e impulsionar o seu negócio. A natureza e o escopo específico dos serviços serão definidos em acordos separados, conforme a sua necessidade.</Paragraph>
            <Paragraph><strong>Dados Fornecidos pelo Usuário:</strong> É fundamental compreender que <strong>todas as informações e dados utilizados na prestação dos nossos serviços são fornecidos diretamente por você, o usuário</strong>. A precisão e a veracidade desses dados são de sua total responsabilidade. A L009 não se responsabiliza por quaisquer problemas ou resultados adversos decorrentes de informações incorretas ou incompletas fornecidas por você.</Paragraph>
            <Paragraph><strong>Uso Adequado dos Serviços:</strong> Você concorda em utilizar os serviços da L009 de forma ética e legal, sem infringir direitos de terceiros ou utilizar os serviços para fins ilícitos ou que possam prejudicar o funcionamento das nossas plataformas.</Paragraph>
            <Paragraph><strong>Propriedade Intelectual:</strong> O conteúdo presente no site da L009 (textos, imagens, logotipos, etc.) é de nossa propriedade intelectual, salvo indicação contrária. É proibida a reprodução ou utilização sem a nossa prévia autorização por escrito.</Paragraph>
            <Paragraph><strong>Limitação de Responsabilidade:</strong> A L009 envidará os melhores esforços na prestação dos seus serviços. No entanto, não garantimos que os serviços serão ininterruptos, livres de erros ou que atenderão a todas as suas expectativas. Nossa responsabilidade está limitada ao escopo dos serviços contratados.</Paragraph>
            <Paragraph><strong>Alterações nos Termos de Uso:</strong> A L009 reserva-se o direito de alterar estes Termos de Uso a qualquer momento, mediante publicação da versão atualizada em seu site. É sua responsabilidade revisar periodicamente este documento. O uso continuado dos serviços após a publicação das alterações constitui sua aceitação dos novos termos.</Paragraph>
            <Paragraph><strong>Lei Aplicável e Foro:</strong> Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Araraquara, Estado de São Paulo, como o competente para dirimir quaisquer dúvidas ou litígios oriundos destes Termos de Uso, com renúncia a qualquer outro, por mais privilegiado que seja.</Paragraph>
            <Paragraph>Ao continuar utilizando os serviços da L009, você demonstra sua concordância com estes Termos de Uso, reconhecendo que os dados utilizados são de sua exclusiva responsabilidade.</Paragraph>
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
          <Grid columns={4}>
            <Card>
              <Social href="https://wa.me/5516992399723?text=Ol%C3%A1%2C%20venho%20atrav%C3%A9s%20do%20site%20oficial%20para%20tirar%20d%C3%BAvidas%20sobre%20os%20servi%C3%A7os%20prestados." icon="bi bi-whatsapp" label="Whatsapp"></Social>
            </Card>
            <Card>
              <Social href="https://t.me/L009TelegramBot" icon="bi bi-telegram" label="Telegram"></Social>
            </Card>
            <Card>
              <Social href="https://discord.gg/wtzmwMnG" icon="bi bi-discord" label="Discord"></Social>
            </Card>
            <Card>
              <Social href="#" icon="bi bi-linkedin" label="Linkedin"></Social>
            </Card>
          </Grid>
        </Grid>
      </Main>
      <Footer>
        <nav aria-label="Links principais">
          <Link href="/#home">Início</Link>
          <Link href="/">Página inicial</Link>
          <Link href="/#contact">Contato</Link>
          <Link href="/pages/policy">Políticas de privacidade</Link>
        </nav>
      </Footer>
    </>
  );
}
