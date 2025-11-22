import Grid from '@/components/Grid/Grid';
import Small from '@/components/Small/Small';
import Title from '@/components/Title/Title';
import Paragraph from '@/components/Paragraph/Paragraph';
import List from '@/components/List/List';
import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
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
                            <Title>Privacy Policy</Title>
                            <Paragraph>L009 values your privacy and transparency regarding your data. We would like to inform you that all data used in our services is provided directly by you, the user, at the moment of contact or interaction with our platforms and services.</Paragraph>
                            <Paragraph><strong>Data Provided by the User:</strong> By using our services, you may provide us with information such as your name, email, phone number, and other information relevant to the provision of our chatbot, routine automation, and API development services.</Paragraph>
                            <Paragraph><strong>Use of Data:</strong> The data you provide is used exclusively for the following purposes:</Paragraph>
                            <List>
                                <li>To respond to your inquiries and requests.</li>
                                <li>To provide the contracted services, such as the development and implementation of chatbots, automations, and APIs.</li>
                                <li>For service-related communication, including updates and relevant information.</li>
                                <li>To improve and personalize your experience with our services.</li>
                            </List>
                            <Paragraph><strong>Data Sharing:</strong> L009 does not share your personal data with third parties for marketing purposes or other purposes not directly related to the provision of the services you requested. In specific cases where data sharing is necessary for service execution (e.g., with third-party tools used in chatbot implementation), you will be duly informed and your consent will be obtained when necessary.</Paragraph>
                            <Paragraph><strong>Data Security:</strong> We implement reasonable security measures to protect the data you provide us against unauthorized access, misuse, alteration, or destruction. However, it is important to remember that no data transmission over the internet is completely secure, and we cannot guarantee the absolute security of the transmitted information.</Paragraph>
                            <Paragraph><strong>Your Rights:</strong> You have the right to access, correct, or request the deletion of the personal data you have provided to us. To exercise these rights or if you have questions about this policy, please contact us through the available communication channels.</Paragraph>
                            <Paragraph>By using L009 services, you confirm that you have read, understood, and agree to this Privacy Policy, aware that all data used is exclusively provided by you.</Paragraph>
                        </Card>
                    </Grid>
                </Section>
            </Main>
            <Footer>
                <nav aria-label="Main links">
                    <Link href="/">Home Page</Link>
                    <Link href="/pages/terms">Terms of Use</Link>
                </nav>
            </Footer>
        </>
    );
}