import Link from 'next/link';
import Grid from '@/components/Grid/Grid';
import Small from '@/components/Small/Small';
import Title from '@/components/Title/Title';
import Paragraph from '@/components/Paragraph/Paragraph';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer';
import Card from '@/components/Card/Card';
import Section from '@/components/Section/Section';

export default function Home() {
    return (
        <>
            <Header />
            <Main>
                {/* Services */}
                <Section>
                    <Grid columns={1} id="terms">
                        <Card>
                            <Small>Information</Small>
                            <Title>Terms of Use</Title>
                            <Paragraph>By accessing and using the services offered by L009 (including the L009.com.br website and any other means of communication), you agree to the following Terms of Use. Please read this document carefully.</Paragraph>
                            <Paragraph><strong>Acceptance of Terms:</strong> By using our services, you declare that you have the legal capacity to enter into this agreement and agree to comply with all the terms and conditions set forth herein.</Paragraph>
                            <Paragraph><strong>Description of Services:</strong> L009 offers intelligent chatbot solutions, routine automation, and API development, aimed at increasing productivity, reducing costs, and boosting your business. The specific nature and scope of the services will be defined in separate agreements, according to your needs.</Paragraph>
                            <Paragraph><strong>Data Provided by the User:</strong> It is essential to understand that <strong>all information and data used in the provision of our services are provided directly by you, the user</strong>. The accuracy and truthfulness of this data are your sole responsibility. L009 is not responsible for any problems or adverse results arising from incorrect or incomplete information provided by you.</Paragraph>
                            <Paragraph><strong>Appropriate Use of Services:</strong> You agree to use L009 services ethically and legally, without infringing on third-party rights or using the services for illicit purposes or that could harm the functioning of our platforms.</Paragraph>
                            <Paragraph><strong>Intellectual Property:</strong> The content present on the L009 website (texts, images, logos, etc.) is our intellectual property, unless otherwise indicated. Reproduction or use without our prior written authorization is prohibited.</Paragraph>
                            <Paragraph><strong>Limitation of Liability:</strong> L009 will make its best efforts in providing its services. However, we do not guarantee that the services will be uninterrupted, error-free, or that they will meet all your expectations. Our liability is limited to the scope of the contracted services.</Paragraph>
                            <Paragraph><strong>Changes to the Terms of Use:</strong> L009 reserves the right to change these Terms of Use at any time, by publishing the updated version on its website. It is your responsibility to periodically review this document. Continued use of the services after the publication of changes constitutes your acceptance of the new terms.</Paragraph>
                            <Paragraph><strong>Governing Law and Jurisdiction:</strong> These Terms of Use will be governed and interpreted in accordance with the laws of the Federative Republic of Brazil. The jurisdiction of Araraquara, State of São Paulo, is elected as the competent court to resolve any doubts or disputes arising from these Terms of Use, waiving any other, however privileged it may be.</Paragraph>
                            <Paragraph>By continuing to use L009 services, you demonstrate your agreement with these Terms of Use, acknowledging that the data used is your exclusive responsibility.</Paragraph>
                        </Card>
                    </Grid>
                </Section>
            </Main>
            <Footer>
                <nav aria-label="Main links">
                    <Link href="/">Home Page</Link>
                    <Link href="/pages/policy">Privacy Policy</Link>
                </nav>
            </Footer>
        </>
    );
}